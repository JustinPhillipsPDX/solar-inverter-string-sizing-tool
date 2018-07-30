
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
        return adjustedTemp;
    }

    //convert feet squared to meters squared
    function feetSqToMetersSq(feet) {
        return (feet / 10.76).toFixed(2);
    }

    console.log(rackingTempAdj("poleMount")); //29
    console.log(feetSqToMetersSq(30)); //2.79

