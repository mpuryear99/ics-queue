import React from "react";
//import logobobisvg from '../media/logo-bobi.svg';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import '../scss/components/timeline.scss';
import moment from "moment";

const groups = [{
  "id": 6973211,
  "title": "Vertical Band Saws (1)",
  "image": "",
  "description": "vertical bladed saw used to make simple, smaller cuts"
},
{
  "id": 9846287,
  "title": "Vertical Band Saws (2)",
  "image": "",
  "description": "vertical bladed saw used to make simple, smaller cuts"
},
{
  "id": 7414263,
  "title": "Powermatic Vertical Band Saw",
  "image": "",
  "description": "larger scale band saw, used for small cuts in a medium project"
},
{
  "id": 3744257,
  "title": "Horizontal Band Saw",
  "image": "",
  "description": "similar to a vertical band saw, however more force than a vertical band saw"
},
{
  "id": 6432951,
  "title": "Chop/Miter Saw",
  "image": "",
  "description": "rotating circular blade used to make perpendicular and angled cuts on medium/large projects (good for projects that are longer in one direction, ex. PVC pipes)"
},
{
  "id": 2314038,
  "title": "Drill Press (1)",
  "image": "",
  "description": "used to drill holes through projects, can also use attachments to cut holes out of a piece (ex. for an inset); machines at varying speeds for different materials"
},
{
  "id": 1266777,
  "title": "Drill Press (2)",
  "image": "",
  "description": "used to drill holes through projects, can also use attachments to cut holes out of a piece (ex. for an inset); machines at varying speeds for different materials"
},
{
  "id": 3676655,
  "title": "Drill Press (3)",
  "image": "",
  "description": "used to drill holes through projects, can also use attachments to cut holes out of a piece (ex. for an inset); machines at varying speeds for different materials"
},
{
  "id": 7421504,
  "title": "Grinder and Buffing Wheel",
  "image": "",
  "description": "used for sharpening and to give smoothness and polish metal surfaces"
},
{
  "id": 1204893,
  "title": "Belt Sander",
  "image": "",
  "description": "used to sand down edges and corners on moderate-size projects"
},
{
  "id": 4279756,
  "title": "Drum Sander",
  "image": "",
  "description": "used for fine surfacing or sanding wood"
},
{
  "id": 9754586,
  "title": "Intermediate Sander",
  "image": "",
  "description": "used for smoothing edges on smaller projects"
},
{
  "id": 8399302,
  "title": "Oscillating Spindle Sander",
  "image": "",
  "description": "used to smooth curved edges on pieces of wood"
},
{
  "id": 4698088,
  "title": "Scroll Saw",
  "image": "",
  "description": "used to make intricate and precise cuts, usually small scale; can be adjusted to have a multidirectional blade that allows for smoother curves in a cut (think jigsaw puzzles)"
},
{
  "id": 4544100,
  "title": "Table Saw",
  "image": "",
  "description": "used for large cuts"
},
{
  "id": 6309734,
  "title": "Wooden Lathe",
  "image": "",
  "description": "rotates a piece of wood that can be carved with a chisel (think table legs), and can also be used to aid in uniform sanding of a project"
},
{
  "id": 5113138,
  "title": "Powermatic Lathe",
  "image": "",
  "description": "a large scale lathe with the same use/function as the lathe mentioned above"
},
{
  "id": 6070602,
  "title": "Planer/Jointer",
  "image": "",
  "description": "planer used to make a large flat sheet; jointer can be used to straighten and square edges"
},
{
  "id": 4582347,
  "title": "CNC Router",
  "image": "",
  "description": "Computer Numerical Controlled milling machine that can remove material using a defined cutting edge to produce parts"
},
{
  "id": 1901639,
  "title": "Manual CNC",
  "image": "",
  "description": ""
},
{
  "id": 2751985,
  "title": "Tabletop CNC",
  "image": "",
  "description": ""
},
{
  "id": 1899809,
  "title": "Prusa (1)",
  "image": "",
  "description": ""
},
{
  "id": 6174698,
  "title": "Prusa (2)",
  "image": "",
  "description": ""
},
{
  "id": 4147206,
  "title": "Prusa (3)",
  "image": "",
  "description": ""
},
{
  "id": 6136095,
  "title": "Prusa (4)",
  "image": "",
  "description": ""
},
{
  "id": 1742600,
  "title": "Prusa (5)",
  "image": "",
  "description": ""
},
{
  "id": 4434896,
  "title": "Lulzbots Mini (1)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 6705014,
  "title": "Lulzbots Mini (2)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 2190325,
  "title": "Lulzbots Mini (3)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 7246113,
  "title": "Lulzbots Mini (4)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 1381684,
  "title": "Lulzbots Mini (5)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 5105721,
  "title": "Lulzbots Mini (6)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 7517520,
  "title": "Lulzbots Mini (7)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 4385330,
  "title": "Lulzbots Mini (8)",
  "image": "",
  "description": "Lulzbot Minis are single extruder printers with an area of 5 x 5 x5.5in"
},
{
  "id": 5564535,
  "title": "Stratasys Fortus 450MC (1)",
  "image": "",
  "description": "a thermoplastic 3D printer with a print area of 16 x 14 x 16in; possesses multiple extruders and should be used for more in-depth projects that require precision"
},
{
  "id": 4617359,
  "title": "Stratasys Fortus 450MC (2)",
  "image": "",
  "description": "a thermoplastic 3D printer with a print area of 16 x 14 x 16in; possesses multiple extruders and should be used for more in-depth projects that require precision"
},
{
  "id": 7583716,
  "title": "Stratasys Fortus 450MC (3)",
  "image": "",
  "description": "a thermoplastic 3D printer with a print area of 16 x 14 x 16in; possesses multiple extruders and should be used for more in-depth projects that require precision"
},
{
  "id": 6264259,
  "title": "Stratasys Fortus 450MC (4)",
  "image": "",
  "description": "a thermoplastic 3D printer with a print area of 16 x 14 x 16in; possesses multiple extruders and should be used for more in-depth projects that require precision"
},
{
  "id": 7979944,
  "title": "Stratasys Fortus 450MC (5)",
  "image": "",
  "description": "a thermoplastic 3D printer with a print area of 16 x 14 x 16in; possesses multiple extruders and should be used for more in-depth projects that require precision"
},
{
  "id": 4331880,
  "title": "Stratasys Fortus 450MC (6)",
  "image": "",
  "description": "a thermoplastic 3D printer with a print area of 16 x 14 x 16in; possesses multiple extruders and should be used for more in-depth projects that require precision"
},
{
  "id": 4110031,
  "title": "45W Full Spectrum P-Series Laser Cutter",
  "image": "",
  "description": "cutter can perform vector cuts as well as engrave into materials. If you need to use ABS or other toxic materials, you will need to get approval by an advisor prior to making any cuts due to health hazards."
},
{
  "id": 4670074,
  "title": "90W Full Spectrum Laser H-Series Professional 24″x16″ CO2 Laser",
  "image": "",
  "description": "cutters can perform vector cuts as well as engrave into materials. If you need to use ABS or other toxic materials, you will need to get approval by an advisor prior to making any cuts due to health hazards."
},
{
  "id": 8617571,
  "title": "Cricut",
  "image": "",
  "description": "digital die-cutting machine that can cut many different materials like paper, vinyl, heat transfer vinyl, and cardstock"
},
{
  "id": 9394182,
  "title": "Embroidery Machine",
  "image": "",
  "description": "can be used for sewing as well as embroidery"
},
{
  "id": 7443537,
  "title": "Haas CNC Mill",
  "image": "",
  "description": "Computer Numerical Controlled milling machine that can remove material using a defined cutting edge to produce parts (can handle materials such as metal)"
},
{
  "id": 6555893,
  "title": "Haas CNC Lathe",
  "image": "",
  "description": "Computer Numerical Controlled turning machine"
},
{
  "id": 3104657,
  "title": "Bridgeport Mill",
  "image": "",
  "description": "can be used for automatic or manual milling"
},
{
  "id": 8363217,
  "title": "Horizontal Metal Bandsaw",
  "image": "",
  "description": "used for making horizontal cuts through metal"
},
{
  "id": 3065050,
  "title": "Arbor Press",
  "image": "",
  "description": "built for pressing, bending, and straightening sheet metal"
},
{
  "id": 5942030,
  "title": "ProtoMAX WaterJet Cutter",
  "image": "",
  "description": " can cut through material such as: aluminum, titanium, stone, carbon fiber, and G10 composite"
},
{
  "id": 6977427,
  "title": "Lincoln Arc Welder",
  "image": "",
  "description": "can weld a variety of materials such as carbon, low alloy, and stainless steel as well as cast iron"
},
{
  "id": 8198484,
  "title": "Miller Welder",
  "image": "",
  "description": ""
}]

const items = [
  {
    //Event Number
    id: 1,
    //Machine
    group: 6973211,
    title: "IN USE",
    start_time: moment(),
    end_time: moment().add(3, 'hour'),
  },
  {
    id: 2,
    group: 7414263,
    title: 'IN USE',
    start_time: moment().add(-2.5, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 3,
    group: 2314038,
    title: 'IN USE',
    start_time: moment().add(-1, 'hour'),
    end_time: moment().add(2, 'hour')  
  }
]

const Scheduler = () => {

  return(
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
  )
};

export default Scheduler;