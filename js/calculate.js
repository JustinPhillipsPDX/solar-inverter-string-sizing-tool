
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

    console.log(rackingTempAdj("poleMount")); //29


    //convert feet squared to meters squared
    function convertSqFeetToSqMeters(feet) {
        return (feet / 10.76).toFixed(2)
    }

    console.log(convertSqFeetToSqMeters(30)); //2.79


    function convertInchToMillimeter(inches) {
        return inches * 25.4
    }

    console.log(convertInchToMillimeter(25)) //635


    function convertFeetToMillimeter(feet) {
        return feet * 304.8
    }

    console.log(convertFeetToMillimeter(25)) //7620


    function calcMetersSquared(mmLength,mmWidth) {
        return (mmLength * mmWidth / 1000000).toFixed(2)
    }


    console.log(calcMetersSquared(1993,1001)); //1.99

    //panel maximum efficiency
    function calcMaxEfficiency() {

    }

