export type Difficulty = "Beginner" | "Easy" | "Intermediate" | "Advanced";

export type Material = {
  id: string;
  name: string;
  qty: string;
  price: number;
  shop: string;
};

export type Step = {
  title: string;
  body: string;
  tip?: string;
  minutes: number;
};

export type Tutorial = {
  slug: string;
  title: string;
  category: string;
  maker: string;
  difficulty: Difficulty;
  duration: string;
  rating: number;
  saves: number;
  image: string;
  blurb: string;
  materials: Material[];
  steps: Step[];
};

const img = (seed: string, w = 900, h = 700) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const categories = [
  "Candle making",
  "Fiber arts",
  "Pottery",
  "Paper craft",
  "Textiles",
  "Woodwork",
];

export const tutorials: Tutorial[] = [
  {
    slug: "pressed-flower-candle",
    title: "Pressed flower candle",
    category: "Candle making",
    maker: "June & Pine",
    difficulty: "Easy",
    duration: "45 min",
    rating: 4.9,
    saves: 1284,
    image: img("craft-candle"),
    blurb:
      "A soft soy candle set with pressed summer blooms — the kind of small ritual that makes an ordinary evening feel considered.",
    materials: [
      { id: "m1", name: "Soy wax flakes", qty: "500 g", price: 9.5, shop: "Craftroom Supply" },
      { id: "m2", name: "Cotton wicks", qty: "Pack of 12", price: 4.0, shop: "Craftroom Supply" },
      { id: "m3", name: "Pressed cornflowers", qty: "1 sheet", price: 6.25, shop: "Morrow & Moss" },
      { id: "m4", name: "Straight-sided jar", qty: "2 × 8 oz", price: 7.8, shop: "Craftroom Supply" },
    ],
    steps: [
      { title: "Prepare the jars", minutes: 5, body: "Wash and fully dry each jar, then centre a wick with a dab of wax at the base. Let it set before pouring.", tip: "A wooden clothespin keeps the wick upright while you work." },
      { title: "Melt the wax", minutes: 15, body: "Melt soy flakes in a double boiler to 80°C, stirring slowly so the wax stays clear rather than cloudy." },
      { title: "Pour the first layer", minutes: 10, body: "Fill each jar halfway and wait until a thin skin forms on the surface — that skin is what holds your flowers." },
      { title: "Set the blooms", minutes: 10, body: "Press flowers gently against the glass with a skewer, then top up with the remaining wax.", tip: "Warm the glass with a hairdryer for a glassy finish." },
      { title: "Cure and trim", minutes: 5, body: "Leave to cure for 24 hours, then trim the wick to 5 mm before the first burn." },
    ],
  },
  {
    slug: "woven-wall-hanging",
    title: "Woven wall hanging",
    category: "Fiber arts",
    maker: "Studio Noa",
    difficulty: "Intermediate",
    duration: "2 hrs",
    rating: 4.8,
    saves: 942,
    image: img("craft-weave"),
    blurb: "Layered rya knots and plain weave in undyed wool, finished on a length of driftwood.",
    materials: [
      { id: "m1", name: "Warp cotton", qty: "100 m", price: 8.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Chunky merino roving", qty: "200 g", price: 18.0, shop: "Morrow & Moss" },
      { id: "m3", name: "Tapestry needle", qty: "1", price: 3.5, shop: "Craftroom Supply" },
      { id: "m4", name: "Driftwood dowel", qty: "40 cm", price: 5.0, shop: "Field & Fold" },
    ],
    steps: [
      { title: "Warp the loom", minutes: 20, body: "Run the warp thread top to bottom, keeping even tension across the full width." },
      { title: "Build the header", minutes: 20, body: "Weave four rows of plain weave to lock the base before any pattern work." },
      { title: "Add rya knots", minutes: 45, body: "Tie rows of rya knots, alternating lengths so the fringe falls in soft steps.", tip: "Trim at the very end, never as you go." },
      { title: "Finish and mount", minutes: 35, body: "Weave a closing header, cut the warp, tie off pairs and hang from the dowel." },
    ],
  },
  {
    slug: "clay-pinch-pot-set",
    title: "Clay pinch pot set",
    category: "Pottery",
    maker: "Lila Creates",
    difficulty: "Beginner",
    duration: "1 hr",
    rating: 4.9,
    saves: 2103,
    image: img("craft-pottery"),
    blurb: "Three little vessels shaped entirely by hand — no wheel, no kiln required.",
    materials: [
      { id: "m1", name: "Air-dry clay", qty: "1 kg", price: 11.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Wooden rib tool", qty: "1", price: 4.5, shop: "Field & Fold" },
      { id: "m3", name: "Matte sealant", qty: "250 ml", price: 9.0, shop: "Craftroom Supply" },
    ],
    steps: [
      { title: "Wedge the clay", minutes: 10, body: "Knead to remove air pockets — the difference between a pot that survives drying and one that cracks." },
      { title: "Pinch the walls", minutes: 25, body: "Press a thumb into the centre and rotate, thinning walls to an even 8 mm." },
      { title: "Smooth and dry", minutes: 15, body: "Refine with a damp rib, then dry slowly under cloth for two days." },
      { title: "Seal", minutes: 10, body: "Two thin coats of matte sealant, sanding lightly between them." },
    ],
  },
  {
    slug: "spring-paper-flowers",
    title: "Spring paper flowers",
    category: "Paper craft",
    maker: "Sophie K.",
    difficulty: "Easy",
    duration: "1.5 hrs",
    rating: 4.7,
    saves: 651,
    image: img("craft-paper"),
    blurb: "Crepe paper anemones that never wilt, built petal by petal on floral wire.",
    materials: [
      { id: "m1", name: "Italian crepe paper", qty: "3 rolls", price: 14.0, shop: "Morrow & Moss" },
      { id: "m2", name: "Floral wire", qty: "20 stems", price: 6.0, shop: "Craftroom Supply" },
      { id: "m3", name: "Floral tape", qty: "1 roll", price: 3.0, shop: "Craftroom Supply" },
    ],
    steps: [
      { title: "Cut petal shapes", minutes: 25, body: "Cut five large and five small petals per bloom, grain running vertically." },
      { title: "Shape the centre", minutes: 20, body: "Wrap a small ball of paper around wire to form the stamen core." },
      { title: "Attach petals", minutes: 30, body: "Stretch each petal at the middle to cup it, then tape in overlapping rounds." },
      { title: "Finish the stem", minutes: 15, body: "Wind floral tape down the wire and bend gently for a natural fall." },
    ],
  },
  {
    slug: "visible-mending-sampler",
    title: "Visible mending sampler",
    category: "Textiles",
    maker: "Clara Mae",
    difficulty: "Intermediate",
    duration: "2.5 hrs",
    rating: 4.9,
    saves: 1520,
    image: img("craft-mending"),
    blurb: "Sashiko-inspired darning that treats a worn knee as somewhere to put colour.",
    materials: [
      { id: "m1", name: "Sashiko thread", qty: "5 skeins", price: 12.0, shop: "Field & Fold" },
      { id: "m2", name: "Darning mushroom", qty: "1", price: 8.5, shop: "Craftroom Supply" },
      { id: "m3", name: "Sashiko needles", qty: "Pack of 6", price: 5.0, shop: "Craftroom Supply" },
    ],
    steps: [
      { title: "Stabilise the hole", minutes: 20, body: "Trim loose threads and tack a scrap of cotton behind the damage." },
      { title: "Lay the warp rows", minutes: 45, body: "Run parallel stitches across the hole, extending well into sound fabric." },
      { title: "Weave the weft", minutes: 60, body: "Weave over-under through the warp, packing rows close." },
      { title: "Press", minutes: 25, body: "Press from the reverse with a cloth so the darn sits flat." },
    ],
  },
  {
    slug: "woven-summer-market-bag",
    title: "Woven summer market bag",
    category: "Fiber arts",
    maker: "Morrow & Moss",
    difficulty: "Advanced",
    duration: "4 hrs",
    rating: 4.8,
    saves: 780,
    image: img("craft-bag"),
    blurb: "A sturdy jute market bag with a woven base and braided leather handles.",
    materials: [
      { id: "m1", name: "Jute twine", qty: "300 m", price: 16.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Leather strap", qty: "2 × 60 cm", price: 22.0, shop: "Field & Fold" },
      { id: "m3", name: "Crochet hook 6 mm", qty: "1", price: 4.0, shop: "Craftroom Supply" },
    ],
    steps: [
      { title: "Work the base", minutes: 60, body: "Crochet a flat round base to 24 cm, increasing evenly each round." },
      { title: "Build the walls", minutes: 90, body: "Work without increases so the sides rise straight." },
      { title: "Open mesh panel", minutes: 60, body: "Alternate chain spaces for the airy mid-section." },
      { title: "Fit the handles", minutes: 30, body: "Punch, saddle-stitch and rivet the leather straps in place." },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  maker: string;
  likes: number;
  image: string;
  category: string;
  note: string;
};

export const communityProjects: Project[] = [
  { id: "p1", title: "Sunday garden basket", maker: "Maya L.", likes: 126, image: img("proj-basket", 1000, 700), category: "Fiber arts", note: "Third attempt and finally happy with the handle tension." },
  { id: "p2", title: "Little paper garden", maker: "Sophie K.", likes: 86, image: img("proj-paper", 800, 520), category: "Paper craft", note: "Made these over two rainy evenings." },
  { id: "p3", title: "Hand-painted mug", maker: "Owen R.", likes: 64, image: img("proj-mug", 800, 520), category: "Pottery", note: "Underglaze pens are a gateway drug." },
  { id: "p4", title: "Beeswax taper set", maker: "Nina V.", likes: 213, image: img("proj-taper", 800, 800), category: "Candle making", note: "Rolled, not poured — took ten minutes." },
  { id: "p5", title: "Patchwork apron", maker: "Devi S.", likes: 154, image: img("proj-apron", 800, 900), category: "Textiles", note: "Every scrap from last year's quilt." },
  { id: "p6", title: "Oak spoon", maker: "Tomas B.", likes: 98, image: img("proj-spoon", 800, 600), category: "Woodwork", note: "Green woodworking on the balcony." },
];

export const shopMaterials = [
  { id: "s1", name: "Soy wax flakes", price: 9.5, unit: "500 g", tag: "Candle making", image: img("mat-wax", 600, 600) },
  { id: "s2", name: "Chunky merino roving", price: 18.0, unit: "200 g", tag: "Fiber arts", image: img("mat-wool", 600, 600) },
  { id: "s3", name: "Air-dry clay", price: 11.0, unit: "1 kg", tag: "Pottery", image: img("mat-clay", 600, 600) },
  { id: "s4", name: "Italian crepe paper", price: 14.0, unit: "3 rolls", tag: "Paper craft", image: img("mat-paper", 600, 600) },
  { id: "s5", name: "Sashiko thread", price: 12.0, unit: "5 skeins", tag: "Textiles", image: img("mat-thread", 600, 600) },
  { id: "s6", name: "Carving gouge set", price: 34.0, unit: "5 pieces", tag: "Woodwork", image: img("mat-gouge", 600, 600) },
  { id: "s7", name: "Cotton wicks", price: 4.0, unit: "Pack of 12", tag: "Candle making", image: img("mat-wick", 600, 600) },
  { id: "s8", name: "Driftwood dowels", price: 5.0, unit: "40 cm", tag: "Fiber arts", image: img("mat-dowel", 600, 600) },
];

export const difficultyStyles: Record<Difficulty, string> = {
  Beginner: "bg-sage text-sage-foreground",
  Easy: "bg-secondary text-secondary-foreground",
  Intermediate: "bg-clay text-clay-foreground",
  Advanced: "bg-primary text-primary-foreground",
};

export const inProgress = {
  slug: "woven-summer-market-bag",
  title: "Woven summer market bag",
  maker: "Morrow & Moss",
  step: 3,
  total: 4,
  percent: 48,
  image: img("craft-bag", 500, 400),
};

export const getTutorial = (slug: string) => tutorials.find((t) => t.slug === slug);
