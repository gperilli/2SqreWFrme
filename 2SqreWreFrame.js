function SetLyOut() {
    //Get screen size
    ScrnWdth = document.getElementById("centralcolumn").clientWidth;
    ScrnHght = document.getElementById("centralcolumn").clientHeight;
    //Set layout of UI Column, bottom/side creator link, and 2 content squares
    SetScreenPostns();
    Set4SubBxs();
    SetWreFrme();
}

function SetScreenPostns() {
    UIColHght = 48;
    GPerHght = 24;

    if (ScrnWdth <= 451) {
      UIColHght = 38;
      GPerHght = 18;
    }

    GPerliPr = 340 / 100 ;//width to height ratio of gperilli text image
    PhsBxMrgn = 20;


    ASqreStle = document.getElementById("ASqre").style;
    BSqreStle = document.getElementById("BSqre").style;
    SqrsCntStle = document.getElementById("SqrsCnt").style;
    UIColStle = document.getElementById("UICol").style;
    gperilliStle = document.getElementById("gperilli").style;
    gperilliimgdc = document.getElementById("gperilliimg");
    gperilliLnimgdc = document.getElementById("gperilliLnimg");
    UISlect = document.getElementsByClassName("UISlect");

    //Measure screen size, calculate box and header, footer orientation and size
    if (ScrnWdth > ScrnHght) {
        Orntn = "Lndscpe";
        if ((ScrnHght * 2) > ScrnWdth) {//Landscape with UI column at top

            Sqre = ScrnWdth / 2;
            RmningV = ScrnHght - Sqre;
            RmningUIColV = RmningV - GPerHght;

            //Square size reduced to allow fixed-sized UI column and gperilli link space on page
            if (RmningV <= (UIColHght + GPerHght)) {
                RmningUIColV = UIColHght;
                Sqre = ScrnHght - (GPerHght + UIColHght);
            }
            console.log("Landscape with UI column at top");
            //Position A & B Squares
            ASqreStle.left = "".concat(( ( ((ScrnWdth - (Sqre * 2)) / 2) * 1)), "px");
            ASqreStle.top = "".concat((((ScrnHght - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
            BSqreStle.left = "".concat((ScrnWdth / 2), "px");
            BSqreStle.top = "".concat((((ScrnHght - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
            //Position gperill link at bottom
            gperilliStle.height = "".concat(GPerHght, "px");
            gperilliStle.top = "".concat((((ScrnHght - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght + Sqre), "px");
            gperilliStle.width = "100%";
            gperilliStle.left = "0px";
            //Position UI column at top
            UIColStle.height = "".concat(UIColHght, "px");
            UIColStle.top = "".concat((((ScrnHght - (UIColHght + GPerHght + Sqre)) / 2)), "px");
            //100% width, left-aligned
            UIColStle.width = "100%";
            UIColStle.left = "0px";
            ///Rectangle containing both square tiles
            SqrsCntStle.left = "".concat(( ( ((ScrnWdth - (Sqre * 2)) / 2) * 1)), "px");
            SqrsCntStle.width = "".concat((Sqre * 2), "px");
            SqrsCntStle.top = "".concat(((((ScrnHght - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght)), "px");
            SqrsCntStle.height = "".concat(Sqre, "px");

            //Switch to UI box sizes calculated as proportion of screen width
            NwPhsBxMrgn = 10;
            NwTtlHght = (((ScrnWdth - (NwPhsBxMrgn * 4)) - 10) / 5);
            OldTtlHght = UIColHght;

            if (ScrnWdth < ((UIColHght * 5) + ((PhsBxMrgn * 4)) + 10 )) {

                UIColHght = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.top = "".concat((((ScrnHght - (GPerHght + UIColHght + Sqre)) / 2) + UIColHght), "px");
                ASqreStle.left = "0px";
                BSqreStle.left = "".concat(Sqre, "px");
                BSqreStle.top = "".concat((((ScrnHght - (GPerHght + UIColHght + Sqre)) / 2) + UIColHght), "px");
                ///Rectangle containing both square tiles
                SqrsCntStle.top = "".concat((((ScrnHght - (GPerHght + UIColHght + Sqre)) / 2) + UIColHght), "px");
                //Position UI column at top
                UIColStle.height = "".concat(UIColHght, "px");
                UIColStle.top = "".concat((((ScrnHght - (GPerHght + UIColHght + Sqre)) / 2) ), "px");
                UIColStle.left = "0px";
                //Position gperill link at bottom
                gperilliStle.top = "".concat((((ScrnHght - (GPerHght + UIColHght + Sqre)) / 2) + Sqre + UIColHght), "px");
            }

            //Position UI boxes
            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColHght, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColHght, "px");

                if (ScrnWdth < ((UIColHght * 5) + ((PhsBxMrgn * 5) + 10))) {
                    document.getElementById(PhsePreBXBx).style.top = "0px";
                } else {
                   document.getElementById(PhsePreBXBx).style.top = "".concat((OldTtlHght - UIColHght), "px");
                }
                document.getElementById(PhsePreBXBx).style.left = "".concat( ((UIColHght + PhsBxMrgn) * i) + ((ScrnWdth - (Sqre * 2)) / 2), "px");
            }

            //gperilli text image
            gperilliimgdc.src = "graphics/gperilliH.png";
            gperilliimgdc.style.height = "".concat((GPerHght - 4), "px");
            gperilliimgdc.style.width = "auto";
            gperilliimgdc.style.left = "".concat(((ScrnWdth - 4) - ((GPerHght - 4) * GPerliPr)), "px");
            //gperilli text image underline
            gperilliLnimgdc.src = "graphics/gperillilnH.png";
            gperilliLnimgdc.style.height = "".concat((GPerHght - 4), "px");
            gperilliLnimgdc.style.width = "auto";
            gperilliLnimgdc.style.left = "".concat(((ScrnWdth - 4) - ((GPerHght - 4) * GPerliPr)), "px");

        } else {//Landscape with UI column on left side
            Sqre = ScrnHght;
            RmningH = ScrnWdth - (Sqre * 2);
            RmningUIColH = RmningH - GPerHght;

            if (RmningH <= (UIColHght + GPerHght)) {
                RmningUIColH = UIColHght;
                Sqre = (ScrnWdth - (GPerHght + UIColHght)) / 2;
            }
            console.log("Landscape with UI column on the side");
            //Position A & B Squares
            ASqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
            ASqreStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2)) + UIColHght), "px");
            BSqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
            BSqreStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2)) + UIColHght + Sqre), "px");
            //Position gperill link on the right side
            gperilliStle.width = "".concat(GPerHght, "px");
            gperilliStle.left = "".concat((((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 3)*2) + UIColHght) + (Sqre * 2)), "px");
            gperilliStle.height = "100%";
            gperilliStle.top = "0px";
            //Position UI column on left
            UIColStle.top = "0px";
            UIColStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2) * 1)), "px");
            UIColStle.width = "".concat(UIColHght, "px");
            UIColStle.height = "100%";
            //Rectangle containing both square tiles
            SqrsCntStle.left = "".concat((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2) + UIColHght), "px");
            SqrsCntStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
            SqrsCntStle.width = "".concat((Sqre * 2), "px");
            SqrsCntStle.height = "".concat(Sqre, "px");

            //Switch to UI box sizes calculated as proportion of screen height
            NwPhsBxMrgn = 10;
            NwTtlHght = (((ScrnHght - (NwPhsBxMrgn * 4)) - 10) / 5);
            OldTtlHght = UIColHght;

            if (ScrnHght < ((UIColHght * 5) + ((PhsBxMrgn * 5) + 10))) {
                UIColHght = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2)) + UIColHght), "px");
                ASqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
                BSqreStle.left = "".concat((((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2)) + UIColHght) + Sqre), "px");
                BSqreStle.top = "".concat(((ScrnHght - Sqre) / 2), "px");
                //Rectangle containing both square tiles
                SqrsCntStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2)) + UIColHght), "px");
                SqrsCntStle.top = "".concat(((ScrnHght - Sqre) / 2) + 1, "px");
                SqrsCntStle.height = "".concat(Sqre, "px");
                SqrsCntStle.width = "".concat((Sqre * 2), "px");
                //Position UI column on left
                UIColStle.width = "".concat(UIColHght, "px");
                UIColStle.left = "".concat(((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2) * 1) + 0), "px");
                //Position gperill link on the right side
                gperilliStle.left = "".concat((((((ScrnWdth - ((Sqre * 2) + UIColHght + GPerHght)) / 2) * 1) + UIColHght) + (Sqre * 2)), "px");

            }

            //Position UI boxes
            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColHght, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColHght, "px");

                if (ScrnHght < ((UIColHght * 5) + ((PhsBxMrgn * 5) + 10))) {
                    document.getElementById(PhsePreBXBx).style.left = "0px";
                } else {
                   document.getElementById(PhsePreBXBx).style.left = "".concat((OldTtlHght - UIColHght), "px");
                }
                document.getElementById(PhsePreBXBx).style.top = "".concat(((UIColHght + PhsBxMrgn) * i) + ((ScrnHght - Sqre) / 2), "px");
            }

            //gperilli text image
            gperilliimgdc.src = "graphics/gperilliV.png";
            gperilliimgdc.style.width = "".concat((GPerHght - 4), "px");
            gperilliimgdc.style.height = "auto";
            gperilliimgdc.style.left = "0px";
            //gperilli text image undeline
            gperilliLnimgdc.src = "graphics/gperillilnV.png";
            gperilliLnimgdc.style.width = "".concat((GPerHght - 4), "px");
            gperilliLnimgdc.style.height = "auto";
            gperilliLnimgdc.style.left = "0px";
        }
    } else {
        Orntn = "Portrt";//Portrait with UI boxes on left side
        if ((ScrnWdth * 2) > ScrnHght) {
            Sqre = ScrnHght / 2;
            RmningH = ScrnWdth - Sqre;
            RmningUIColH = RmningH - GPerHght;

            if (RmningH <= (UIColHght + GPerHght)) {
                RmningUIColH = UIColHght;
                Sqre = ScrnWdth - (GPerHght + UIColHght);
            }
            console.log("Portrait with UI column on the side");
            //Position A & B Squares
            ASqreStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
            ASqreStle.left = "".concat((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
            BSqreStle.top = "".concat((((ScrnHght - (Sqre * 2)) / 2) + Sqre), "px");
            BSqreStle.left = "".concat((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
            //Position gperill link on the right side
            gperilliStle.top = "0px";
            gperilliStle.left = "".concat(((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght) + Sqre), "px");
            gperilliStle.width = "".concat(GPerHght, "px");
            gperilliStle.height = "100%";
            //Position UI column on the left
            UIColStle.top = "0px";
            UIColStle.left = "".concat(((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2), "px");
            UIColStle.width = "".concat(UIColHght, "px");
            UIColStle.height = "100%";
            //Rectangle containing both square tiles
            SqrsCntStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
            SqrsCntStle.left = "".concat((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
            SqrsCntStle.width = "".concat(Sqre, "px");
            SqrsCntStle.height = "".concat((Sqre * 2), "px");

            //Switch to UI box sizes calculated as proportion of screen height
            NwPhsBxMrgn = 10;
            NwTtlHght = (((ScrnHght - (NwPhsBxMrgn * 4)) - 10) / 5);
            OldTtlHght = UIColHght;

            if (ScrnHght < ((UIColHght * 5) + ((PhsBxMrgn * 5) + 10))) {
                UIColHght = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.left = "".concat((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
                ASqreStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
                BSqreStle.left = "".concat((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
                BSqreStle.top = "".concat((((ScrnHght - (Sqre * 2)) / 2) + Sqre), "px");
                //Position and size central rectangle
                SqrsCntStle.left = "".concat((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght), "px");
                SqrsCntStle.top = "".concat(((ScrnHght - (Sqre * 2)) / 2), "px");
                SqrsCntStle.height = "".concat((Sqre * 2), "px");
                SqrsCntStle.width = "".concat(Sqre, "px");
                //Position UI column on the left
                UIColStle.left = "".concat(((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2), "px");
                UIColStle.width = "".concat(UIColHght, "px");
                //Position gperill link on the right side
                gperilliStle.left = "".concat(((((ScrnWdth - (UIColHght + GPerHght + Sqre)) / 2) + UIColHght) + Sqre), "px");
                gperilliStle.width = "".concat(GPerHght, "px");
            }

            //Position UI boxes
            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColHght, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColHght, "px");

                if (ScrnHght < ((UIColHght * 5) + ((PhsBxMrgn * 5) + 10))) {
                    document.getElementById(PhsePreBXBx).style.left = "0px";
                } else {
                   document.getElementById(PhsePreBXBx).style.left = "".concat((OldTtlHght - UIColHght), "px");
                }
                document.getElementById(PhsePreBXBx).style.top = "".concat((((UIColHght + PhsBxMrgn) * i) + ((ScrnHght - (Sqre * 2)) / 2)), "px");
            }


            //gperilli text image
            gperilliimgdc.src = "graphics/gperilliV.png";
            gperilliimgdc.style.width = "".concat((GPerHght - 4), "px");
            gperilliimgdc.style.height = "auto";
            gperilliimgdc.style.left = "0px";
            //gperilli text image undeline
            gperilliLnimgdc.src = "graphics/gperillilnV.png";
            gperilliLnimgdc.style.width = "".concat((GPerHght - 4), "px");
            gperilliLnimgdc.style.height = "auto";
            gperilliLnimgdc.style.left = "0px";
        } else {//Portrait with UI column at top
            Sqre = ScrnWdth;
            RmningV = ScrnHght - (Sqre * 2);
            RmningUIColV = RmningV - 24;

            if (RmningV <= (UIColHght + 24)) {
                RmningUIColV = UIColHght;
                Sqre = (ScrnHght - (24 + UIColHght)) / 2;
            }
            console.log("Portrait with UI column at top");
            //Position A & B Squares
            ASqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
            ASqreStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) + UIColHght), "px");
            BSqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
            BSqreStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) + Sqre + UIColHght), "px");
            //Position gperill link at the bottom
            gperilliStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) + (Sqre * 2) + UIColHght), "px");
            gperilliStle.left = "0px";
            gperilliStle.width = "100%";
            gperilliStle.height = "".concat(GPerHght, "px");
            //Position UI column at the top
            UIColStle.left = "0px";
            UIColStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2)), "px");
            UIColStle.width = "100%";
            UIColStle.height = "".concat(UIColHght, "px");
            //Position and size central rectangle
            SqrsCntStle.left = "0px";
            SqrsCntStle.top = "".concat((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) + UIColHght), "px");
            SqrsCntStle.width = "100%";
            SqrsCntStle.height = "".concat((Sqre * 2), "px");

            NwPhsBxMrgn = 10;
            NwTtlHght = (ScrnWdth - (NwPhsBxMrgn * 4)) / 5;
            OldTtlHght = UIColHght;

            if (ScrnWdth < ((UIColHght * 5) + ((NwPhsBxMrgn * 4) + (((ScrnWdth - Sqre) / 2))))) {
                UIColHght = NwTtlHght;
                PhsBxMrgn = NwPhsBxMrgn;
                //Position A & B Squares
                ASqreStle.top = "".concat(((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) * 1) + UIColHght), "px");
                ASqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
                BSqreStle.top = "".concat((((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) * 1) + UIColHght) + Sqre), "px");
                BSqreStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
                //Position and size central rectangle
                SqrsCntStle.left = "".concat(((ScrnWdth - Sqre) / 2), "px");
                SqrsCntStle.top = "".concat(((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) * 1) + UIColHght), "px");
                SqrsCntStle.height = "".concat((Sqre * 2), "px");
                SqrsCntStle.width = "".concat(Sqre, "px");
                //Position UI column at the top
                UIColStle.height = "".concat(UIColHght, "px");
                UIColStle.top = "".concat(((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2), "px");
                //Position gperill link at the bottom
                gperilliStle.top = "".concat(((((ScrnHght - ((Sqre * 2) + UIColHght + GPerHght)) / 2) + UIColHght) + (Sqre * 2)), "px");

            }


            for (i = 0; i < 5; i++) {
                PhsePreBXBx = "PhsePreB".concat(i, "Bx");
                document.getElementById(PhsePreBXBx).style.height = "".concat(UIColHght, "px");
                document.getElementById(PhsePreBXBx).style.width = "".concat(UIColHght, "px");

                if (ScrnWdth < ((OldTtlHght * 5) + ((NwPhsBxMrgn * 4) + (((ScrnWdth - Sqre) / 2))))) {
                    document.getElementById(PhsePreBXBx).style.top = "0px";
                } else {
                    document.getElementById(PhsePreBXBx).style.top = "0px";
                }
                document.getElementById(PhsePreBXBx).style.left = "".concat(((UIColHght + PhsBxMrgn) * i), "px");
            }

            //gperilli text image
            gperilliimgdc.src = "graphics/gperilliH.png";
            gperilliimgdc.style.height = "".concat((GPerHght - 4), "px");
            gperilliimgdc.style.width = "auto";
            gperilliimgdc.style.left = "".concat(((ScrnWdth - 4) - ((GPerHght - 4) * GPerliPr)), "px");
            //gperilli text image undeline
            gperilliLnimgdc.src = "graphics/gperillilnH.png";
            gperilliLnimgdc.style.height = "".concat((GPerHght - 4), "px");
            gperilliLnimgdc.style.width = "auto";
            gperilliLnimgdc.style.left = "".concat(((ScrnWdth - 4) - ((GPerHght - 4) * GPerliPr)), "px");
        }
    }

    //Set outer square sizes
    document.getElementById("ASqre").style.width = "".concat(Sqre, "px");
    document.getElementById("ASqre").style.height = "".concat(Sqre, "px");
    document.getElementById("BSqre").style.width = "".concat(Sqre, "px");
    document.getElementById("BSqre").style.height = "".concat(Sqre, "px");

}





function Set4SubBxs() {
    for (i = 0; i < 4; i++) {
        document.getElementsByClassName("BSqreQrtrs")[i].style.width = "".concat((Sqre / 2), "px");
        document.getElementsByClassName("BSqreQrtrs")[i].style.height = "".concat((Sqre / 2), "px");
    }

    // B Square sub box A
    document.getElementById("BSqreSubA").style.left = "".concat(0, "px");
    document.getElementById("BSqreSubA").style.top = "".concat(0, "px");
    // B Square sub box B
    document.getElementById("BSqreSubB").style.left = "".concat((Sqre / 2), "px");
    document.getElementById("BSqreSubB").style.top = "".concat(0, "px");
    // B Square sub box C
    document.getElementById("BSqreSubC").style.left = "".concat(0, "px");
    document.getElementById("BSqreSubC").style.top = "".concat((Sqre / 2), "px");
    // B Square sub box D
    document.getElementById("BSqreSubD").style.left = "".concat((Sqre / 2), "px");
    document.getElementById("BSqreSubD").style.top = "".concat((Sqre / 2), "px");
}

function SetWreFrme() {
  SqrsCntStle = document.getElementById("SqrsCnt").style;
  ASqreStle = document.getElementById("ASqre").style;
  BSqreStle = document.getElementById("BSqre").style;
  gperilliStle = document.getElementById("gperilli").style;
  UIColStle = document.getElementById("UICol").style;
  gperilliimgdc = document.getElementById("gperilliimg");
  gperilliLnimgdc = document.getElementById("gperilliLnimg");
  UISlect = document.getElementsByClassName("UISlect");

  lnered = "1px solid red";
  lnepink = "3px solid pink";
  lneblu = "1px solid blue";
  lnegreen = "1px solid green";
  bigoffset = "-3px";
  lneoffset = "-1px";

  //wire frame lines
  gperilliStle.outline = lnered;
  gperilliStle.outlineOffset = lneoffset;
  UIColStle.outline = lnered;
  UIColStle.outlineOffset = lneoffset;
  SqrsCntStle.outline = lnepink;
  SqrsCntStle.outlineOffset = bigoffset;
  ASqreStle.outline = lneblu;
  ASqreStle.outlineOffset = lneoffset;
  BSqreStle.outline = lneblu;
  BSqreStle.outlineOffset = lneoffset;

  for (i = 0; i < 5; i++) {
  UISlect[i].style.outline = lnegreen;
  UISlect[i].style.outlineOffset = lneoffset;
  }

}
