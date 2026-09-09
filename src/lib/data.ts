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
    image:
      "https://images.unsplash.com/photo-1570823635306-250abb06d4b3?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb:
      "A soft soy candle set with pressed summer blooms — the kind of small ritual that makes an ordinary evening feel considered.",
    materials: [
      { id: "m1", name: "Soy wax flakes", qty: "500 g", price: 9.5, shop: "Craftroom Supply" },
      { id: "m2", name: "Cotton wicks", qty: "Pack of 12", price: 4.0, shop: "Craftroom Supply" },
      { id: "m3", name: "Pressed cornflowers", qty: "1 sheet", price: 6.25, shop: "Morrow & Moss" },
      {
        id: "m4",
        name: "Straight-sided jar",
        qty: "2 × 8 oz",
        price: 7.8,
        shop: "Craftroom Supply",
      },
    ],
    steps: [
      {
        title: "Prepare the jars",
        minutes: 5,
        body: "Wash and fully dry each jar, then centre a wick with a dab of wax at the base. Let it set before pouring.",
        tip: "A wooden clothespin keeps the wick upright while you work.",
      },
      {
        title: "Melt the wax",
        minutes: 15,
        body: "Melt soy flakes in a double boiler to 80°C, stirring slowly so the wax stays clear rather than cloudy.",
      },
      {
        title: "Pour the first layer",
        minutes: 10,
        body: "Fill each jar halfway and wait until a thin skin forms on the surface — that skin is what holds your flowers.",
      },
      {
        title: "Set the blooms",
        minutes: 10,
        body: "Press flowers gently against the glass with a skewer, then top up with the remaining wax.",
        tip: "Warm the glass with a hairdryer for a glassy finish.",
      },
      {
        title: "Cure and trim",
        minutes: 5,
        body: "Leave to cure for 24 hours, then trim the wick to 5 mm before the first burn.",
      },
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
    image:
      "https://images.unsplash.com/photo-1776721977064-d4e5389db6b9?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb: "Layered rya knots and plain weave in undyed wool, finished on a length of driftwood.",
    materials: [
      { id: "m1", name: "Warp cotton", qty: "100 m", price: 8.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Chunky merino roving", qty: "200 g", price: 18.0, shop: "Morrow & Moss" },
      { id: "m3", name: "Tapestry needle", qty: "1", price: 3.5, shop: "Craftroom Supply" },
      { id: "m4", name: "Driftwood dowel", qty: "40 cm", price: 5.0, shop: "Field & Fold" },
    ],
    steps: [
      {
        title: "Warp the loom",
        minutes: 20,
        body: "Run the warp thread top to bottom, keeping even tension across the full width.",
      },
      {
        title: "Build the header",
        minutes: 20,
        body: "Weave four rows of plain weave to lock the base before any pattern work.",
      },
      {
        title: "Add rya knots",
        minutes: 45,
        body: "Tie rows of rya knots, alternating lengths so the fringe falls in soft steps.",
        tip: "Trim at the very end, never as you go.",
      },
      {
        title: "Finish and mount",
        minutes: 35,
        body: "Weave a closing header, cut the warp, tie off pairs and hang from the dowel.",
      },
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
    image:
      "https://images.unsplash.com/photo-1760018890645-28c8312cd7cb?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb: "Three little vessels shaped entirely by hand — no wheel, no kiln required.",
    materials: [
      { id: "m1", name: "Air-dry clay", qty: "1 kg", price: 11.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Wooden rib tool", qty: "1", price: 4.5, shop: "Field & Fold" },
      { id: "m3", name: "Matte sealant", qty: "250 ml", price: 9.0, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Wedge the clay",
        minutes: 10,
        body: "Knead to remove air pockets — the difference between a pot that survives drying and one that cracks.",
      },
      {
        title: "Pinch the walls",
        minutes: 25,
        body: "Press a thumb into the centre and rotate, thinning walls to an even 8 mm.",
      },
      {
        title: "Smooth and dry",
        minutes: 15,
        body: "Refine with a damp rib, then dry slowly under cloth for two days.",
      },
      {
        title: "Seal",
        minutes: 10,
        body: "Two thin coats of matte sealant, sanding lightly between them.",
      },
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
    image:
      "https://images.unsplash.com/photo-1597566833495-e4ad471783ec?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb: "Crepe paper anemones that never wilt, built petal by petal on floral wire.",
    materials: [
      { id: "m1", name: "Italian crepe paper", qty: "3 rolls", price: 14.0, shop: "Morrow & Moss" },
      { id: "m2", name: "Floral wire", qty: "20 stems", price: 6.0, shop: "Craftroom Supply" },
      { id: "m3", name: "Floral tape", qty: "1 roll", price: 3.0, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Cut petal shapes",
        minutes: 25,
        body: "Cut five large and five small petals per bloom, grain running vertically.",
      },
      {
        title: "Shape the centre",
        minutes: 20,
        body: "Wrap a small ball of paper around wire to form the stamen core.",
      },
      {
        title: "Attach petals",
        minutes: 30,
        body: "Stretch each petal at the middle to cup it, then tape in overlapping rounds.",
      },
      {
        title: "Finish the stem",
        minutes: 15,
        body: "Wind floral tape down the wire and bend gently for a natural fall.",
      },
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
    image:
      "https://images.unsplash.com/photo-1743049755958-00221eab097f?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb: "Sashiko-inspired darning that treats a worn knee as somewhere to put colour.",
    materials: [
      { id: "m1", name: "Sashiko thread", qty: "5 skeins", price: 12.0, shop: "Field & Fold" },
      { id: "m2", name: "Darning mushroom", qty: "1", price: 8.5, shop: "Craftroom Supply" },
      { id: "m3", name: "Sashiko needles", qty: "Pack of 6", price: 5.0, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Stabilise the hole",
        minutes: 20,
        body: "Trim loose threads and tack a scrap of cotton behind the damage.",
      },
      {
        title: "Lay the warp rows",
        minutes: 45,
        body: "Run parallel stitches across the hole, extending well into sound fabric.",
      },
      {
        title: "Weave the weft",
        minutes: 60,
        body: "Weave over-under through the warp, packing rows close.",
      },
      {
        title: "Press",
        minutes: 25,
        body: "Press from the reverse with a cloth so the darn sits flat.",
      },
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
    image:
      "https://images.unsplash.com/photo-1524679813234-66a389fe1a42?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb: "A sturdy jute market bag with a woven base and braided leather handles.",
    materials: [
      { id: "m1", name: "Jute twine", qty: "300 m", price: 16.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Leather strap", qty: "2 × 60 cm", price: 22.0, shop: "Field & Fold" },
      { id: "m3", name: "Crochet hook 6 mm", qty: "1", price: 4.0, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Work the base",
        minutes: 60,
        body: "Crochet a flat round base to 24 cm, increasing evenly each round.",
      },
      {
        title: "Build the walls",
        minutes: 90,
        body: "Work without increases so the sides rise straight.",
      },
      {
        title: "Open mesh panel",
        minutes: 60,
        body: "Alternate chain spaces for the airy mid-section.",
      },
      {
        title: "Fit the handles",
        minutes: 30,
        body: "Punch, saddle-stitch and rivet the leather straps in place.",
      },
    ],
  },
  {
    slug: "macrame-plant-hanger",
    title: "Macrame plant hanger",
    category: "Fiber arts",
    maker: "Hang & Grow",
    difficulty: "Beginner",
    duration: "1.5 hrs",
    rating: 4.7,
    saves: 643,
    image:
      "https://images.unsplash.com/photo-1746450912857-60bdc3b5d8df?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb:
      "A simple set of knotwork hangers for trailing plants — practice the four foundational knots and you can make anything.",
    materials: [
      { id: "m1", name: "Cotton macrame cord", qty: "80 m", price: 10.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Wooden beads", qty: "4", price: 3.5, shop: "Morrow & Moss" },
      { id: "m3", name: "Metal ring", qty: "1", price: 2.0, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Measure and cut",
        minutes: 10,
        body: "Cut eight lengths of cord at 4 m each, then fold each in half and attach to the ring with lark's head knots.",
      },
      {
        title: "Square knot rows",
        minutes: 40,
        body: "Work alternating square knots down the sides, keeping the pattern even.",
      },
      {
        title: "Gather and bind",
        minutes: 20,
        body: "Bring all cords together 25 cm from the bottom and wrap with a thin cord to form the plant basket.",
        tip: "Use a small safety pin to hold the wrap in place while you work.",
      },
      {
        title: "Finishing touches",
        minutes: 20,
        body: "Trim the fringe evenly, add beads if you like, then hang and pot your plant.",
      },
    ],
  },
  {
    slug: "embroidered-tote-bag",
    title: "Embroidered tote bag",
    category: "Textiles",
    maker: "Devi S.",
    difficulty: "Intermediate",
    duration: "2.5 hrs",
    rating: 4.8,
    saves: 512,
    image:
      "https://images.unsplash.com/photo-1771585655058-1772ec95b84b?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb:
      "Floral embroidery on a simple canvas tote — a useful project that teaches stem stitch, satin stitch and French knots.",
    materials: [
      { id: "m1", name: "Canvas tote blank", qty: "1", price: 6.0, shop: "Craftroom Supply" },
      {
        id: "m2",
        name: "Embroidery floss set",
        qty: "12 colours",
        price: 8.5,
        shop: "Morrow & Moss",
      },
      { id: "m3", name: "Embroidery needle", qty: "1", price: 2.5, shop: "Craftroom Supply" },
      { id: "m4", name: "Transfer paper", qty: "1 sheet", price: 3.0, shop: "Field & Fold" },
    ],
    steps: [
      {
        title: "Transfer the design",
        minutes: 15,
        body: "Print or draw your motif on transfer paper and press it onto the centre of the tote.",
      },
      {
        title: "Stem and outline",
        minutes: 45,
        body: "Use stem stitch for stems and a split stitch for outlines, working from the centre outward.",
      },
      {
        title: "Fill petals",
        minutes: 45,
        body: "Fill petals with satin stitch, splitting the floss for a softer look.",
        tip: "Keep the back tidy — this bag will be used both sides.",
      },
      {
        title: "Add details",
        minutes: 15,
        body: "Add French knots for berries or centres, then remove the transfer paper and press from the reverse.",
      },
    ],
  },
  {
    slug: "ceramic-glaze-tiles",
    title: "Ceramic glaze tiles",
    category: "Pottery",
    maker: "Lila Creates",
    difficulty: "Advanced",
    duration: "3.5 hrs",
    rating: 4.6,
    saves: 389,
    image:
      "https://images.unsplash.com/photo-1771308355129-4a0a93b055e6?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb:
      "Test your own glaze palette on small tiles — each one becomes a swatch, a coaster, or a tiny gift.",
    materials: [
      { id: "m1", name: "Biscuit tiles", qty: "6", price: 7.0, shop: "Craftroom Supply" },
      { id: "m2", name: "Glaze sample set", qty: "4 colours", price: 18.0, shop: "Field & Fold" },
      { id: "m3", name: "Underglaze pens", qty: "3", price: 9.5, shop: "Morrow & Moss" },
      { id: "m4", name: "Clear glaze", qty: "100 ml", price: 12.0, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Prepare the surface",
        minutes: 20,
        body: "Wipe each biscuit tile with a damp sponge and let it dry completely.",
      },
      {
        title: "Wax resist details",
        minutes: 30,
        body: "Draw patterns with wax resist, then brush over with coloured glaze.",
      },
      {
        title: "Layer and layer",
        minutes: 60,
        body: "Apply two or three glaze layers, letting each dry before the next.",
        tip: "Thin coats prevent running in the kiln.",
      },
      {
        title: "Fire and finish",
        minutes: 90,
        body: "Load carefully and fire to the cone recommended on your glaze label.",
      },
    ],
  },
  {
    slug: "paper-quilling-art",
    title: "Paper quilling art",
    category: "Paper craft",
    maker: "Sophie K.",
    difficulty: "Easy",
    duration: "1.5 hrs",
    rating: 4.5,
    saves: 478,
    image:
      "https://images.unsplash.com/photo-1776042448583-2304f9c7c490?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb:
      "Roll, shape and glue paper strips into a framed botanical picture — satisfyingly meditative and very portable.",
    materials: [
      {
        id: "m1",
        name: "Quilling paper strips",
        qty: "200 strips",
        price: 6.5,
        shop: "Morrow & Moss",
      },
      { id: "m2", name: "Quilling tool", qty: "1", price: 4.0, shop: "Craftroom Supply" },
      { id: "m3", name: "White card frame", qty: "1", price: 5.0, shop: "Craftroom Supply" },
      { id: "m4", name: "PVA glue", qty: "1 bottle", price: 2.5, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Prep the frame",
        minutes: 10,
        body: "Lightly pencil a leaf or flower shape onto the card inside the frame.",
      },
      {
        title: "Roll basic shapes",
        minutes: 30,
        body: "Make loose circles, teardrops and marquise shapes in two or three sizes.",
      },
      {
        title: "Arrange and glue",
        minutes: 30,
        body: "Arrange the shapes on the card, then glue one at a time with a tiny dot of PVA.",
        tip: "Use tweezers for tiny pieces.",
      },
      {
        title: "Frame it",
        minutes: 20,
        body: "Let the glue dry fully, then close the frame and check the alignment.",
      },
    ],
  },
  {
    slug: "wooden-trivet",
    title: "Wooden trivet",
    category: "Woodwork",
    maker: "Tomas B.",
    difficulty: "Beginner",
    duration: "2 hrs",
    rating: 4.7,
    saves: 605,
    image:
      "https://images.unsplash.com/photo-1759523091199-14f987919622?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb:
      "A small, useful board for hot dishes — practice cross-cutting, sanding and food-safe oiling.",
    materials: [
      { id: "m1", name: "Oak board blank", qty: "20 × 20 cm", price: 8.0, shop: "Field & Fold" },
      { id: "m2", name: "Sandpaper set", qty: "3 grades", price: 4.5, shop: "Craftroom Supply" },
      {
        id: "m3",
        name: "Food-safe mineral oil",
        qty: "100 ml",
        price: 5.0,
        shop: "Craftroom Supply",
      },
    ],
    steps: [
      {
        title: "Cross-cut the blank",
        minutes: 15,
        body: "Cut the board to size with a handsaw or mitre saw, then mark rounded corners with a template.",
      },
      {
        title: "Shape the edges",
        minutes: 30,
        body: "Rout or file the corners round and ease all edges with 120-grit paper.",
      },
      {
        title: "Sand and smooth",
        minutes: 30,
        body: "Progress through 180 and 320 grit, wiping clean between each.",
        tip: "Sand with the grain to avoid cross-grain scratches.",
      },
      {
        title: "Oil and finish",
        minutes: 15,
        body: "Rub in mineral oil, let it soak for 10 minutes, then buff with a clean cloth.",
      },
    ],
  },
  {
    slug: "rolled-beeswax-candle",
    title: "Rolled beeswax candle",
    category: "Candle making",
    maker: "June & Pine",
    difficulty: "Beginner",
    duration: "30 min",
    rating: 4.8,
    saves: 890,
    image:
      "https://images.unsplash.com/photo-1636714528228-f469eefb3eef?fm=jpg&q=80&w=900&auto=format&fit=crop",
    blurb:
      "Dip and layer beeswax sheets around a wick — the quickest way to make a candle that smells like honey.",
    materials: [
      { id: "m1", name: "Beeswax sheets", qty: "3 sheets", price: 7.0, shop: "Morrow & Moss" },
      { id: "m2", name: "Cotton wick", qty: "1 m", price: 2.0, shop: "Craftroom Supply" },
      { id: "m3", name: "Wick stabiliser", qty: "1", price: 1.5, shop: "Craftroom Supply" },
    ],
    steps: [
      {
        title: "Prepare the wick",
        minutes: 5,
        body: "Dip the wick in melted wax to stiffen it, then centre it on the edge of a beeswax sheet.",
      },
      {
        title: "Roll the first layer",
        minutes: 10,
        body: "Roll tightly around the wick, pressing gently to bond the wax.",
      },
      {
        title: "Add layers",
        minutes: 10,
        body: "Overlap each new sheet slightly for a tapered shape.",
        tip: "If the wax cracks, warm it between your palms for a few seconds.",
      },
      {
        title: "Seal the base",
        minutes: 5,
        body: "Trim the base straight, press gently on a warm surface, and stand upright to set.",
      },
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
  {
    id: "p1",
    title: "Sunday garden basket",
    maker: "Maya L.",
    likes: 126,
    image:
      "https://images.unsplash.com/photo-1726410622640-5a65bf56b61f?fm=jpg&q=80&w=1000&auto=format&fit=crop",
    category: "Fiber arts",
    note: "Third attempt and finally happy with the handle tension.",
  },
  {
    id: "p2",
    title: "Little paper garden",
    maker: "Sophie K.",
    likes: 86,
    image:
      "https://images.unsplash.com/photo-1597566833495-e4ad471783ec?fm=jpg&q=80&w=800&auto=format&fit=crop",
    category: "Paper craft",
    note: "Made these over two rainy evenings.",
  },
  {
    id: "p3",
    title: "Hand-painted mug",
    maker: "Owen R.",
    likes: 64,
    image:
      "https://images.unsplash.com/photo-1760018890645-28c8312cd7cb?fm=jpg&q=80&w=800&auto=format&fit=crop",
    category: "Pottery",
    note: "Underglaze pens are a gateway drug.",
  },
  {
    id: "p4",
    title: "Beeswax taper set",
    maker: "Nina V.",
    likes: 213,
    image:
      "https://images.unsplash.com/photo-1570823635306-250abb06d4b3?fm=jpg&q=80&w=800&auto=format&fit=crop",
    category: "Candle making",
    note: "Rolled, not poured — took ten minutes.",
  },
  {
    id: "p5",
    title: "Patchwork apron",
    maker: "Devi S.",
    likes: 154,
    image:
      "https://images.unsplash.com/photo-1729774091667-ff78f4da40f7?fm=jpg&q=80&w=800&auto=format&fit=crop",
    category: "Textiles",
    note: "Every scrap from last year's quilt.",
  },
  {
    id: "p6",
    title: "Oak spoon",
    maker: "Tomas B.",
    likes: 98,
    image:
      "https://images.unsplash.com/photo-1759523091199-14f987919622?fm=jpg&q=80&w=800&auto=format&fit=crop",
    category: "Woodwork",
    note: "Green woodworking on the balcony.",
  },
];

export const shopMaterials = [
  {
    id: "s1",
    name: "Soy wax flakes",
    price: 9.5,
    unit: "500 g",
    tag: "Candle making",
    image:
      "https://images.unsplash.com/photo-1570823635306-250abb06d4b3?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s2",
    name: "Chunky merino roving",
    price: 18.0,
    unit: "200 g",
    tag: "Fiber arts",
    image:
      "https://images.unsplash.com/photo-1776721977064-d4e5389db6b9?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s3",
    name: "Air-dry clay",
    price: 11.0,
    unit: "1 kg",
    tag: "Pottery",
    image:
      "https://images.unsplash.com/photo-1760018890645-28c8312cd7cb?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s4",
    name: "Italian crepe paper",
    price: 14.0,
    unit: "3 rolls",
    tag: "Paper craft",
    image:
      "https://images.unsplash.com/photo-1597566833495-e4ad471783ec?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s5",
    name: "Sashiko thread",
    price: 12.0,
    unit: "5 skeins",
    tag: "Textiles",
    image:
      "https://images.unsplash.com/photo-1743049755958-00221eab097f?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s6",
    name: "Carving gouge set",
    price: 34.0,
    unit: "5 pieces",
    tag: "Woodwork",
    image:
      "https://images.unsplash.com/photo-1759523091199-14f987919622?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s7",
    name: "Cotton wicks",
    price: 4.0,
    unit: "Pack of 12",
    tag: "Candle making",
    image:
      "https://images.unsplash.com/photo-1525786779587-4ad49fc545fe?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "s8",
    name: "Driftwood dowels",
    price: 5.0,
    unit: "40 cm",
    tag: "Fiber arts",
    image:
      "https://images.unsplash.com/photo-1731848698314-804495431953?fm=jpg&q=80&w=600&auto=format&fit=crop",
  },
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
  image:
    "https://images.unsplash.com/photo-1524679813234-66a389fe1a42?fm=jpg&q=80&w=500&auto=format&fit=crop",
};

export const getTutorial = (slug: string) => tutorials.find((t) => t.slug === slug);

export const getProject = (id: string) => communityProjects.find((p) => p.id === id);
