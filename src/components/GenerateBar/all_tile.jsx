import { v4 as uuIDV4 } from "uuid";
let tileSet = [
    {
        imgURL: "1.png",
        tile: [
            {
                tileID: uuIDV4(),
                name: "black",
                rotate: false,
                rules: ['AAA', 'AAA', 'AAA', 'AAA'],
                imgURL: "tiles/demo/blank.png"
            },
            {
                tileID: uuIDV4(),
                name: "three way",
                rotate: true,
                rules: ['ABA', 'ABA', 'AAA', 'ABA'],
                imgURL: "tiles/demo/up.png"
            }
        ]
    }, {
        imgURL: "2.png",
        tile: [
            {
                tileID: uuIDV4(),
                name: "darkBlack",
                rotate: false,
                rules: ['AAA', 'AAA', 'AAA', 'AAA'],
                imgURL: "tiles/circuit/0.png"
            },
            {
                tileID: uuIDV4(),
                name: "green",
                rotate: false,
                rules: ['BBB', 'BBB', 'BBB', 'BBB'],
                imgURL: "tiles/circuit/1.png"
            },
            {
                tileID: uuIDV4(),
                name: "AA",
                rotate: true,
                rules: ['BBB', 'BCB', 'BBB', 'BBB'],
                imgURL: "tiles/circuit/2.png"
            },
            {
                tileID: uuIDV4(),
                name: "line",
                rotate: true,
                rules: ['BBB', 'BDB', 'BBB', 'BDB'],
                imgURL: "tiles/circuit/3.png"
            },
            {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['ABB', 'BCB', 'BBA', 'AAA'],
                imgURL: "tiles/circuit/4.png"
            },
            {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['ABB', 'BBB', 'BBB', 'BBA'],
                imgURL: "tiles/circuit/5.png"
            }, {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['BBB', 'BCB', 'BBB', 'BCB'],
                imgURL: "tiles/circuit/6.png"
            }, {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['BDB', 'BCB', 'BDB', 'BCB'],
                imgURL: "tiles/circuit/7.png"
            }, {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['BDB', 'BBB', 'BCB', 'BBB'],
                imgURL: "tiles/circuit/8.png"
            }, {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['BCB', 'BCB', 'BBB', 'BCB'],
                imgURL: "tiles/circuit/9.png"
            }, {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['BCB', 'BCB', 'BCB', 'BCB'],
                imgURL: "tiles/circuit/10.png"
            }, {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['BCB', 'BCB', 'BBB', 'BBB'],
                imgURL: "tiles/circuit/11.png"
            },
            {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['BBB', 'BCB', 'BBB', 'BCB'],
                imgURL: "tiles/circuit/12.png"
            },

        ]
    },
    {
        imgURL: "5.png",
        tile: [
            {
                tileID: uuIDV4(),
                name: "darkBlack",
                rotate: false,
                rules: ['AAA', 'AAA', 'AAA', 'AAA'],
                imgURL: "tiles/rail/tile0.png"
            },
            {
                tileID: uuIDV4(),
                name: "green",
                rotate: false,
                rules: ['ABA', 'ABA', 'ABA', 'AAA'],
                imgURL: "tiles/rail/tile1.png"
            },
            {
                tileID: uuIDV4(),
                name: "AA",
                rotate: true,
                rules: ['ABB', 'BBA', 'AAA', 'AAA'],
                imgURL: "tiles/rail/tile2.png"
            },
            {
                tileID: uuIDV4(),
                name: "line",
                rotate: true,
                rules: ['BAA', 'AAA', 'AAB', 'AAA'],
                imgURL: "tiles/rail/tile3.png"
            },
            {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['ABA', 'ABA', 'AAA', 'AAA'],
                imgURL: "tiles/rail/tile4.png"
            },
            {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['ABA', 'AAA', 'ABA', 'AAA'],
                imgURL: "tiles/rail/tile5.png"
            }, {
                tileID: uuIDV4(),
                name: "green",
                rotate: true,
                rules: ['ABA', 'ABA', 'ABA', 'ABA'],
                imgURL: "tiles/rail/tile6.png"
            }
        ]
    },
    {
        imgURL: "3.png",
        tile: [
            {
                tileID: uuIDV4(),
                name: "black",
                rotate: false,
                rules: ['AAA', 'AAA', 'AAA', 'AAA'],
                imgURL: "tiles/polka/blank.png"
            },
            {
                tileID: uuIDV4(),
                name: "three way",
                rotate: true,
                rules: ['ABA', 'ABA', 'AAA', 'ABA'],
                imgURL: "tiles/polka/up.png"
            }
        ]
    },
    {
        imgURL: "4.png",
        tile: [
            {
                tileID: uuIDV4(),
                name: "black",
                rotate: false,
                rules: ['AAA', 'AAA', 'AAA', 'AAA'],
                imgURL: "tiles/mountains/blank.png"
            },
            {
                tileID: uuIDV4(),
                name: "three way",
                rotate: true,
                rules: ['ABA', 'ABA', 'AAA', 'ABA'],
                imgURL: "tiles/mountains/up.png"
            }
        ]
    },
];
export default tileSet