const productTables = [
    {'pennplan': 
        `
        <table class="popuptext" style="visibility: visible;" id="myPopup">
                            <tr>
                                <th>Type</th>
                                <th>Thickness</th>
                                <th>Width</th>
                                <th>Length</th>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP 300</td>
                                <td>0.3mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 500</td>
                                <td>0.5mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 750</td>
                                <td>0.75mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 1000</td>
                                <td>1.0mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 1500</td>
                                <td>1.5mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>100m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 2000</td>
                                <td>2.0mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>50m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP-GL/HP-GF 500</td>
                                <td>500g</td>
                                <td>2m, 3m, 5.8m, 6m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP-GL/HP-GF 1000</td>
                                <td>1000g</td>
                                <td>2m, 3m, 5.8m, 6m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP-GL/HP-GF 1500</td>
                                <td>1500g</td>
                                <td>2m, 3m, 5.8m, 6m</td>
                                <td>100m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP-GL/HP-GF 2000</td>
                                <td>2000g</td>
                                <td>2m, 3m, 5.8m, 6m</td>
                                <td>100m</td>
                            </tr>
                        </table>
                        `
    },
    {'penncell':
            `
             <table class="popuptext" style="visibility: visible;" id="myPopup">
                            <tr>
                                <th>Type</th>
                                <th>Thickness</th>
                                <th>Cell Height</th>
                                <th>Cell Size (Appx.)</th>
                            </tr>
                            <tr>
                                <td>PENNCELL SM/TH/PCA 330</td>
                                <td>1.5mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>248mm x 214mm</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 500</td>
                                <td>0.5mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 750</td>
                                <td>0.75mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 1000</td>
                                <td>1.0mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>200m</td>
                            </tr>
                            <tr>
                                <td>PENNPLAN HP/TX 1500</td>
                                <td>1.5mm</td>
                                <td>2m, 3m, 5.8m, 6m, 7m, 8m</td>
                                <td>100m</td>
                            </tr>
                        </table>
                        `                        
    },
    {'penncrete':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Thickness</th>
                            <th>Roll Width</th>
                            <th>Roll Length</th>
                        </tr>
                        <tr>
                            <td>PENNCRETE WN/FG/BW 6</td>
                            <td>6mm</td>
                            <td>2m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNCRETE WN/FG/BW 8</td>
                            <td>8mm</td>
                            <td>2m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNCRETE WN/FG/BW 10</td>
                            <td>10mm</td>
                            <td>2m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNCRETE WN/FG/BW 15</td>
                            <td>15mm</td>
                            <td>2m</td>
                            <td>25m</td>
                        </tr>
                    </table>
                    `                   
    },
    {'pennpond':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Thickness</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNPOND 1000</td>
                            <td>1.0mm</td>
                            <td>3m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNPOND 1200</td>
                            <td>1.2mm</td>
                            <td>3m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNPOND 1500</td>
                            <td>1.5mm</td>
                            <td>3m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNPOND 2000</td>
                            <td>2.0mm</td>
                            <td>3m</td>
                            <td>30m</td>
                        </tr>
                    </table>
                    `       
    },
    {'pennsafe':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Color</th>
                            <th>Roll Height</th>
                            <th>Roll Length</th>
                        </tr>
                        <tr>
                            <td>PENNSAFE 95</td>
                            <td>Blue, Red, Orange</td>
                            <td>0.95m</td>
                            <td>10m/15m/25m</td>
                        </tr>
                        <tr>
                            <td>PENNSAFE 195</td>
                            <td>Blue, Red, Orange</td>
                            <td>1.95m</td>
                            <td>10m/15m/25m</td>
                        </tr>
                    </table>
                    `       
    },
    {'penntext':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Mass</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 100</td>
                            <td>100g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>200m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 150</td>
                            <td>150g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>200m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 200</td>
                            <td>200g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>100m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 300</td>
                            <td>300g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>100m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 400</td>
                            <td>400g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>100m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 500</td>
                            <td>500g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 600</td>
                            <td>600g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 700</td>
                            <td>700g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNTEXT GL/GF/GP 800</td>
                            <td>800g</td>
                            <td>3m, 3.2m, 5.8m, 6m</td>
                            <td>50m</td>
                        </tr>
                    </table>
                    `                    
    },
    {'pennliner':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Mass</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNLINER NP/OF 4000</td>
                            <td>4000g</td>
                            <td>6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNLINER NP/OF 4500</td>
                            <td>4500g</td>
                            <td>6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNLINER NP/OF 5000</td>
                            <td>5000g</td>
                            <td>6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNLINER NP/OF 5500</td>
                            <td>5500g</td>
                            <td>6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNLINER NP/OF 6000</td>
                            <td>6000g</td>
                            <td>6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNLINER NP/OF 7000</td>
                            <td>7000g</td>
                            <td>6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNLINER NP/OF 8000</td>
                            <td>8000g</td>
                            <td>6m</td>
                            <td>30m</td>
                        </tr>
                    </table>
                    `                    
    },
    {'pennmat':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Thickness</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNMAT 220</td>
                            <td>10mm</td>
                            <td>2m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNMAT 260</td>
                            <td>12mm</td>
                            <td>2m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNMAT 350</td>
                            <td>14mm</td>
                            <td>2m</td>
                            <td>50m</td>
                        </tr>
                        <tr>
                            <td>PENNMAT 430</td>
                            <td>16mm</td>
                            <td>2m</td>
                            <td>30m</td>
                        </tr>
                    </table>
                    `       
    },
    {'pennnet':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNNET 402</td>
                            <td>2m, 3m, 6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNNET 502</td>
                            <td>2m, 3m, 6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNNET 602</td>
                            <td>2m, 3m, 6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNNET 702</td>
                            <td>2m, 3m, 6m</td>
                            <td>30m</td>
                        </tr>
                        <tr>
                            <td>PENNNET 802</td>
                            <td>2m, 3m, 6m</td>
                            <td>30m</td>
                        </tr>
                    </table>
                    `       
    },
    {'pennplas':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Height</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 800</td>
                            <td>8mm</td>
                            <td>3m</td>
                            <td>15m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 1000</td>
                            <td>10mm</td>
                            <td>3m</td>
                            <td>15m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 1200</td>
                            <td>12mm</td>
                            <td>3m</td>
                            <td>15m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 1500</td>
                            <td>15mm</td>
                            <td>3m</td>
                            <td>15m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 1600</td>
                            <td>15mm</td>
                            <td>3m</td>
                            <td>15m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 1800</td>
                            <td>18mm</td>
                            <td>3m</td>
                            <td>15m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 2000</td>
                            <td>20mm</td>
                            <td>3m</td>
                            <td>15m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 2500</td>
                            <td>25mm</td>
                            <td>3m</td>
                            <td>10m</td>
                        </tr>
                        <tr>
                            <td>PENNPLAS DB/DB-GL 3000</td>
                            <td>30mm</td>
                            <td>3m</td>
                            <td>10m</td>
                        </tr>
                    </table>
                    `                    
    },
    {'penndrate':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Parameter</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNDRATE DW/DWGL 55</td>
                            <td>As Project Indicators</td>
                            <td>As Project Indicators</td>
                        </tr>
                        <tr>
                            <td>PENNDRATE DW/DWGL 90</td>
                            <td>As Project Indicators</td>
                            <td>As Project Indicators</td>
                        </tr>
                        <tr>
                            <td>PENNDRATE DW/DWGL 100</td>
                            <td>As Project Indicators</td>
                            <td>As Project Indicators</td>
                        </tr>
                        <tr>
                            <td>PENNDRATE DW/DWGL 130</td>
                            <td>As Project Indicators</td>
                            <td>As Project Indicators</td>
                        </tr>
                        <tr>
                            <td>PENNDRATE DW/DWGL 220</td>
                            <td>As Project Indicators</td>
                            <td>As Project Indicators</td>
                        </tr>
                    </table>
                    `       
    },
    {'pennpaver':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Height</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNPAVER FL/IR 38</td>
                            <td>38mm</td>
                            <td>500mm</td>
                            <td>500m</td>
                        </tr>
                        <tr>
                            <td>PENNPAVER FL/IR 48</td>
                            <td>48mm</td>
                            <td>500mm</td>
                            <td>500m</td>
                        </tr>
                        <tr>
                            <td>PENNPAVER FL/IR 68</td>
                            <td>68mm</td>
                            <td>500mm</td>
                            <td>500m</td>
                        </tr>
                    </table>
                    `       
    },
    {'pennbag':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Size</th>
                        </tr>
                        <tr>
                            <td>PENNBAG GL/GF/GP</td>
                            <td>40x80cm or as Indicators</td>
                        </tr>
                        <tr>
                            <td>PENNBAG GL/GF/GP</td>
                            <td>40x60cm or as Indicators</td>
                        </tr>
                        <tr>
                            <td>PENNBAG GL/GF/GP</td>
                            <td>50x80cm or as Indicators</td>
                        </tr>
                    </table>
                    `       
    },
    {'pennflat':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Thickness</th>
                            <th>Width</th>
                            <th>Length</th>
                        </tr>
                        <tr>
                            <td>PENNFLAT EH/EP/EL/EA 800</td>
                            <td>0.8mm</td>
                            <td>2m, 3m</td>
                            <td>25m</td>
                        </tr>
                        <tr>
                            <td>PENNFLAT EH/EP/EL/EA 1000</td>
                            <td>1.0mm</td>
                            <td>2m, 3m</td>
                            <td>25m</td>
                        </tr>
                        <tr>
                            <td>PENNFLAT EH/EP/EL/EA 1500</td>
                            <td>1.5mm</td>
                            <td>2m, 3m</td>
                            <td>25m</td>
                        </tr>
                        <tr>
                            <td>PENNFLAT EH/EP/EL/EA 2000</td>
                            <td>2.0mm</td>
                            <td>2m, 3m</td>
                            <td>25m</td>
                        </tr>
                    </table>
                    `       
    },
    {'pennguard':
        `
         <table class="popuptext" style="visibility: visible;" id="myPopup">
                        <tr>
                            <th>Type</th>
                            <th>Thickness</th>
                            <th>Width</th>
                            <th>Length</>
                        </tr>
                        <tr>
                            <td>PENNGUARD PA/PP 10</td>
                            <td>10mm</td>
                            <td>2m</td>
                            <td>25m</td>
                        </tr>
                        <tr>
                            <td>PENNGUARD PA/PP 20</td>
                            <td>20mm</td>
                            <td>2m</td>
                            <td>25m</td>
                        </tr>
                        <tr>
                            <td>PENNGUARD PA/PP 30</td>
                            <td>30mm</td>
                            <td>2m</td>
                            <td>25m</td>
                        </tr>
                    </table>
                    `       
    },
]

function togglePopup(key) {
    console.log(key);
    var popupOverlay = document.querySelector(".popup-overlay"); 
    popupOverlay.addEventListener('click', () => {
        popupOverlay.classList.remove("show-popup");
        popup.classList.remove("show-popup");
    })
    var popup = document.querySelector(".popup"); 
    popupOverlay.classList.toggle("show-popup");
    popup.classList.toggle("show-popup");
    productTables.map(product => {
            if(product[key]){ 
                console.log(product[key]);
                popup.innerHTML = product[key];
            }                    
        }
    )
    // console.log(selected);    
    
}