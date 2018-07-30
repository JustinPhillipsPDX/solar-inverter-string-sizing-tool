/*
    //Solar Resources
        Home Power - PV System Derating
            https://www.homepower.com/pv-system-derating
        Civic Solar - Solar Inverter String Design Calculations
            https://www.civicsolar.com/support/installer/articles/solar-inverter-string-design-calculations

    //values needed for calculation
        inverter max voltage (Vmax)
        module open circuit voltage (Voc) @ standard test conditions (STC)
        module temperature coefficient of Voc (TCVoc)
        module maximum power point voltage (Vmpp or Vmp)
        module temperature coefficient of Vmp (TC Pmpp)

    //TRise by racking solutions (equals approximately)
        - Pole Mount Trise: 29°C
        - Ground Mount Trise: 30°C
        - Pitched Roof Trise: 32°C
        - Flat Roof Trise: 36°C

    //PV System Derating (Estimated efficiency/derate value)
    http://www.pvpower.com/assets/Measuring-PV-Efficiency-Solar-Panels.pdf

        Nmax (maximum efficiency) = Pmax (maximum power output) / (1000 W/m² * (area of collector))

        //convert units
            
            Am² = Aft²/10.76
            30ft² x 1m²/10.76ft² = 2.79m²
        
            m² = mm²/1,000,000

        //eg.
        
            Nmax = 400W / (1000 W/m² x 2.79m²) = 0.143 x 100% = 14.3%

            1,993mm x 1,001mm = 1,994,993mm² / 1,000,000 = 1.994993m²

            Nmax (maximum efficiency) = 320W / (1000 W/m² x 1.994993m²) = 0.1604 x 100% = 16.04%

        //STC Component Derating Factors (PVWATTS Default Range)



    //ASHRAE DATA INSIDE NORTH AMERICA
        SolarABC's: http://www.solarabcs.org/about/publications/reports/expedited-permit/map/index.html
    //OUTSIDE NORTH AMERICA
        SolarDesignTemps: http://www.solardesigntemps.com/

    //PORTLAND INTERNATIONAL AP
        THigh (High Temp 2% Avg.): 32°C
        TLow (Extreme Min): -6°C

    //MEMPHIS INTERNATIONAL AP
        THigh (High Temp 2% Avg.): 35°C
        TLow (Extreme Min): -12°C

    //Solar Equipment used for Calculation
        //Sunmodule XL SW 320 MONO (33mm frame)
            open circuit voltage (Voc): 45.9V
            STC (TStc): 1000 W/m², 25°C
                Note: Temperature is always a factor in the output of a panel so STC assumes less than 25 degrees C.
            TCVoc: -0.304%/°C
            maximum power point voltage (Vmpp): 36.7V
            TC Pmpp (VmpCoef): -0.43%/°C

            length: 1,993mm
            width: 1,001mm

        //SMA Sunny Boy 7700TL-US-22
            Vmax: 600V
            Vstart: 150V @ 240V AC

    //Three part calculation (example based on Memphis data)

        //part one (calc min number of modules within a series string)
            Vmin = (Vmp + ((THigh + TRise - TStc) x (VmpCoef x Vmp/100)))
            Vmin = 36.7V + ((35°C + 32°C - 25°C) x (-0.43 x 36.7/100))
            Vmin = 36.7 + (42 x -0.158)
            Vmin = 30.064V

        //part two (de-rate factor)
            

*/