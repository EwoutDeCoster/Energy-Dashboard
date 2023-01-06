
function getData() {
    fetch("http://192.168.0.160/api/v1/data")
       .then(res => res.json())
       .then(data => {
           document.getElementById("verbruik").innerHTML = data.active_power_w + " W";
           if (data.active_power_w <= 0){
            document.getElementById("verbruik").style.color = "rgb(28, 200, 152)" 
            document.getElementById("bolt").style.color = "rgb(28, 200, 152)" 
            if (document.getElementById("bolt").classList.contains("fa-bolt")){
                document.getElementById("bolt").classList.remove("fa-bolt")
                document.getElementById("bolt").classList.add("fa-leaf")
            }

            
        } else{
            document.getElementById("verbruik").style.color = "rgb(176, 81, 255)";
            document.getElementById("bolt").style.color = "rgb(255, 213, 61)"
            if (document.getElementById("bolt").classList.contains("fa-leaf")){
                document.getElementById("bolt").classList.remove("fa-leaf")
                document.getElementById("bolt").classList.add("fa-bolt")
            }

    }


            document.getElementById("fase1").innerHTML = data.active_power_l1_w + " W";
            document.getElementById("fase2").innerHTML = data.active_power_l2_w + " W";
            document.getElementById("fase3").innerHTML = data.active_power_l3_w + " W";
            if (data.active_power_l3_w > 1500){
                document.getElementById("charger").style.color = "rgb(255, 213, 61)"
            } else{
                document.getElementById("charger").style.color = "rgb(28, 200, 152)" 

            }
            document.getElementById("gasteller").innerHTML = data.total_gas_m3 + " m³";
            let maand = data.gas_timestamp.toString().substring(2, 4);
            let dag = data.gas_timestamp.toString().substring(4, 6);
            let uur = data.gas_timestamp.toString().substring(6, 8);
            let min = data.gas_timestamp.toString().substring(8, 10);





            

            

            document.getElementById("lastupdategas").innerHTML = "Laatste update: " + uur + ":" + min;




       }
       )
      .catch(err => {
           console.log(err);
           console.log(err.message);
       });

    
}


function init() {
    getData();
    // call getData every 1 second
    setInterval(getData, 1000);

}

window.onload = init;
