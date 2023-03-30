export const sample_locations: any[] = [
  {
    name: "Main base",
    link: "/Inventory",
    icon: "aa",
    userId: "lollos",
    items: ["hammer", "ball"],
  },
  {
    name: "Train station base",
    link: "/Inventory",
    icon: "aa",
    userId: "lollos2",
    items: ["hammer", "ball"],
  },
];

export const sample_users: any[] = [
  {
    userName: "Reinie",
    loginCode: "FFW-062",
  },
];

export const sample_recipes: any[] = [
  {
    levelOne_Recipes: [
      {
        Recipe_Level: 1,
        Recipe_Name: "Copper Plate",
        Craft_Time: 3.5,
        Material_Req: [{ Req_Name: "Copper Ore", Total_Req: 1 }],
        Building_Req: "Furnace",
        Img: "",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Iron Plate",
        Craft_Time: 3.5,
        Material_Req: [{ Req_Name: "Iron Ore", Total_Req: 1 }],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Wood",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Raw Wood", Total_Req: 2 }],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Landfill",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Stone", Total_Req: 20 }],
        Building_Req: "Assembling Machine",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Wooden Chest",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Wood", Total_Req: 4 }],
        Building_Req: "Assembling Machine",
        Produces: 1,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Copper Cable",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Copper Plate", Total_Req: 1 }],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Iron Gear Wheel",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Iron Plate", Total_Req: 1 }],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 1,
        Recipe_Name: "Copper Cable",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Iron Gear Wheel", Total_Req: 5 }],
        Building_Req: "None",
        Produces: 1,
      },
    ],
  },
  {
    levelOne_Recipes: [
      {
        Recipe_Level: 2,
        Recipe_Name: "Iron Stick",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Iron Plate", Total_Req: 1 }],
        Building_Req: "Assembling Machine",
        Produces: 2,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Pipe",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Iron Plate", Total_Req: 1 }],
        Building_Req: "Assembling Machine",
        Produces: 4,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Stone Brick",
        Craft_Time: 3.5,
        Material_Req: [{ Req_Name: "Stone", Total_Req: 1 }],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Stone Furnace",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Stone", Total_Req: 5 }],
        Building_Req: "Furnace",
        Produces: 2,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Grenade",
        Craft_Time: 8,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 5 },
          { Req_Name: "Coal", Total_Req: 10 },
        ],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Steel Plate",
        Craft_Time: 0.5,
        Material_Req: [
          { Req_Name: "Iron Plate", Total_Req: 5 },
          { Req_Name: "Coal", Total_Req: 10 },
        ],
        Building_Req: "Furnace",
        Produces: 1,
      },
      {
        Recipe_Level: 2,
        Recipe_Name: "Iron Gear Wheel",
        Craft_Time: 0.5,
        Material_Req: [{ Req_Name: "Iron Plate", Total_Req: 1 }],
        Building_Req: "Assembling Machine",
        Produces: 1,
      },
    ],
  },
];
