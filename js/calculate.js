
    //temperature rise based on racking solution
    function rackingTempAdj(solutionType) {
        var adjustedTemp = 0;
        switch (solutionType) {
            case "poleMount":
                adjustedTemp = 29;
                break;
            case "groundMount":
                adjustedTemp = 30;
                break;
            case "pitchedRoof":
                adjustedTemp = 32;
                break;
            case "flatRoof":
                adjustedTemp = 36;
                break;
            default:
                break;
        }
        return adjustedTemp
    }

    //console.log(rackingTempAdj("poleMount")); //29

    //
    function convert(value1,unit1,unit2,value2 = 1) {
        //use value2 to multiply and convert

        var conversion = 1;

        switch (unit1) {
            case "in":
                if (unit2 == "ft") {
                    conversion = 12;
                } else if (unit2 == "mm") {
                    conversion = 0.0393701;
                } else if (unit2 == "m") {
                    conversion = 39.3701;
                }
                break;
            case "in2":
                if (unit2 == "ft2") {
                    conversion = 144;
                } else if (unit2 == "mm2") {
                    conversion = 0.00155;
                } else if (unit2 == "m2") {
                    conversion = 1550;
                }
                break;
            case "ft":
                if (unit2 == "in") {
                    conversion = 0.0833333;
                } else if (unit2 == "mm") {
                    conversion = 0.00328084;
                } else if (unit2 == "m") {
                    conversion = 3.28084;
                }
                break;
            case "ft2":
                if (unit2 == "in2") {
                    conversion = 0.00694444;
                } else if (unit2 == "mm2") {
                    conversion = 1.0764e-5;
                } else if (unit2 == "m2") {
                    conversion = 10.7639;
                }
                break;
            case "mm":
                if (unit2 == "in") {
                    conversion = 25.4;
                } else if (unit2 == "ft") {
                    conversion = 304.8;
                } else if (unit2 == "m") {
                    conversion = 1000;
                }
                break;
            case "mm2":
                if (unit2 == "in2") {
                    conversion = 645.16;
                } else if (unit2 == "ft2") {
                    conversion = 92903;
                } else if (unit2 == "m2") {
                    conversion = 1e+6;
                }
                break;
            case "m":
                if (unit2 == "in") {
                    conversion = 0.0254;
                } else if (unit2 == "ft") {
                    conversion = 0.3048;
                } else if (unit2 == "mm") {
                    conversion = 0.001;
                }
                break;
            case "m2":
                if (unit2 == "in2") {
                    conversion = 0.00064516;
                } else if (unit2 == "ft2") {
                    conversion = 0.092903;
                } else if (unit2 == "mm2") {
                    conversion = 1e-6;
                }
                break;
            default:
                break;
        }

        return (value1 * value2 / conversion).toFixed(2)
    }

    console.log(convert(1993, "mm2", "m2", 1001)); //1.99m²

    //panel maximum efficiency
    function calcMaxEfficiency() {

    }

