using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Yakuza0DressupMaximizer
{
    internal static class Program
    {
        internal static int Main(string[] args)
        {
            var a = Assembly.GetExecutingAssembly();
            var resourceNames = a.GetManifestResourceNames();
            var statsName = resourceNames.FirstOrDefault(s => s.EndsWith(".json", StringComparison.InvariantCultureIgnoreCase));
            if (statsName == null)
            {
                Console.WriteLine("No stats file");
                return -1;
            }

            Console.WriteLine("Reading item stats...");
            Dictionary<string, Item> dressUpItems;
            using (var stream = a.GetManifestResourceStream(statsName))
            using (var reader = new StreamReader(stream, Encoding.UTF8))
            using (var jsonReader = new JsonTextReader(reader))
                dressUpItems = JsonSerializer.Create().Deserialize<Dictionary<string, Item>>(jsonReader);

            var lookup = new Dictionary<string, Dictionary<string, Item>>
            {
                ["HAIRACC"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "HAIRACC" } },
                ["GLASSES"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "GLASSES" } },
                ["EARRING"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "EARRING" } },
                ["NECKLACE"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "NECKLACE" } },
                ["NAIL"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "NAIL" } },
                ["RING"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "RING" } },
                ["WATCH"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "WATCH" } },
                ["BRACELET"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "BRACELET" } },
                ["PERFUME"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "PERFUME" } },
                ["DRESS_COLOR"] = new Dictionary<string, Item> { ["None"] = new Item{ Name = "None", Kind = "DRESS_COLOR" } },
            };
            foreach (var i in dressUpItems.Where(p => p.Key != "types").Select(p => p.Value))
            {
                if (!lookup.TryGetValue(i.Kind, out var category))
                    lookup[i.Kind] = category = new Dictionary<string, Item>();

                var baseItemName = i.Name[i.Name.Length - 2] == ' ' ? i.Name.Substring(0, i.Name.Length - 2) : i.Name;
                if (!category.TryGetValue(baseItemName, out var itm))
                    category[baseItemName] = i;
            }

            Console.WriteLine("Calculating outfits...");
            var maxScore = int.MinValue;
            var outfits = new Dictionary<(int s, int b, int c, int f), List<(long cost, Dictionary<string, Item> outfit)>>();
            var minOutfitCost = new Dictionary<(int s, int b, int c, int f), (long min, long upper)>();
            var dresses = lookup["DRESS"];
            var hairs = lookup["HAIR"];
            var hairAccessories = lookup["HAIRACC"];
            var glasses = lookup["GLASSES"];
            var earrings = lookup["EARRING"];
            var necklaces = lookup["NECKLACE"];
            var nails = lookup["NAIL"];
            var rings = lookup["RING"];
            var watches = lookup["WATCH"];
            var bracelets = lookup["BRACELET"];
            var perfumes = lookup["PERFUME"];
            var dressColors = lookup["DRESS_COLOR"];
            foreach (var d in dresses.Values)
            foreach (var h in hairs.Values)
            foreach (var ha in hairAccessories.Values)
            foreach (var g in glasses.Values)
            foreach (var e in earrings.Values)
            foreach (var nl in necklaces.Values)
            foreach (var n in nails.Values)
            foreach (var r in rings.Values)
            foreach (var w in watches.Values)
            foreach (var b in bracelets.Values)
            foreach (var p in perfumes.Values)
            foreach (var dc in dressColors.Values)
            {
                var s = GetScore(d, h, ha, g, e, nl, n, r, w, b, p, dc);
                if (s.total >= maxScore)
                {
                    var outfit = new Dictionary<string, Item>
                    {
                        ["DRESS"] = d,
                        ["HAIR"] = h,
                        ["HAIRACC"] = ha,
                        ["GLASSES"] = g,
                        ["EARRING"] = e,
                        ["NECKLACE"] = nl,
                        ["NAIL"] = n,
                        ["RING"] = r,
                        ["WATCH"] = w,
                        ["BRACELET"] = b,
                        ["PERFUME"] = p,
                        ["DRESS_COLOR"] = dc,
                    };
                    if (s.total > maxScore)
                    {
                        outfits.Clear();
                        minOutfitCost.Clear();
                        maxScore = s.total;
                    }
                    if (!minOutfitCost.TryGetValue(s.stats, out var minCost))
                        minOutfitCost[s.stats] = minCost = (long.MaxValue, long.MaxValue);
                    if (s.cost > minCost.upper)
                        continue;

                    if (!outfits.TryGetValue(s.stats, out var outfitList))
                        outfits[s.stats] = outfitList = new List<(long cost, Dictionary<string, Item> outfit)>();
                    if (s.cost < minCost.min)
                    {
                        var newMin = s.cost;
                        var newUpper = (long)(s.cost * 1.1);
                        minOutfitCost[s.stats] = (newMin, newUpper);
                        var newOutfitList = outfitList.Where(o => o.cost < newUpper).ToList();
                        outfits[s.stats] = outfitList = newOutfitList;
                    }
                    outfitList.Add((s.cost, outfit));
                }
            }

            Console.WriteLine($"Best score: {maxScore}, total combinations: {outfits.Count}");
            using (var output = File.Open(@".\results.csv", FileMode.Create, FileAccess.Write, FileShare.Read))
            using (var writer = new StreamWriter(output, new UTF8Encoding(false)))
            {
                writer.WriteLine("Sexy;Beauty;Cute;Funny;Cost;Dress;Hair;Hair Accessory;Glasses;Earring;Necklace;Nail;Ring;Watch;Bracelet;Perfume;Dress Color");
                foreach (var oc in outfits)
                foreach (var os in oc.Value.OrderBy(i => i.cost))
                {
                    var s = oc.Key;
                    var o = os.outfit;
                    writer.WriteLine($"{s.s};{s.b};{s.c};{s.f};{os.cost};{o["DRESS"].Name};{o["HAIR"].Name};{o["HAIRACC"].Name};{o["GLASSES"].Name};{o["EARRING"].Name};{o["NECKLACE"].Name};{o["NAIL"].Name};{o["RING"].Name};{o["WATCH"].Name};{o["BRACELET"].Name};{o["PERFUME"].Name};{o["DRESS_COLOR"].Name}");
                }
            }
            Console.WriteLine("Done.");
            return 0;
        }

        private static (int total, (int s, int b, int c, int f) stats, long cost) GetScore(params Item[] items)
        {
            int s, b, c, f;
            s = b = c = f = 0;
            long cost = 0L;
            foreach (var i in items)
            {
                s += i.Sexy;
                b += i.Beauty;
                c += i.Cuty;
                f += i.Funny;
                cost += i.Buy;
            }
            s = Math.Clamp(s, 0, 3);
            b = Math.Clamp(b, 0, 3);
            c = Math.Clamp(c, 0, 3);
            f = Math.Clamp(f, 0, 3);
            return (s + b + c + f, (s, b, c, f), cost);
        }
    }

    internal class Item
    {
        public string Kind;
        public string Name;
        public long Buy;
        public string Explanation;
        [JsonProperty("DRAW_IDX")]
        public int DrawIdx;
        [JsonProperty("SCENARIO_STATE")]
        public long ScenarioState;
        public int Sexy;
        public int Beauty;
        public int Cuty;
        public int Funny;
    }
}
