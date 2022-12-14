function traerReporteStatus(){
    $.ajax({
        url:"http://192.9.141.214:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            pintarStatus(respuesta);
        }
    });
}

function  pintarStatus(json_maquinas){

    let myTable='<table class="table-auto w-full text-left whitespace-no-wrap text-slate-900 md:text-2xl">';

        myTable+="<tr>";
        myTable+="<td>"+json_maquinas.completed+"</td>";
        myTable+="<td>"+json_maquinas.cancelled+"</td>";
        myTable+="</tr>";
  
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function traerReportesFechas(){
    $.ajax({
        url:"http://192.9.141.214:8080/api/Reservation/report-dates/{dateOne}/{dateTwo}",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            //pintarCategoria(respuesta);
        }
    });
}

function traerReportesClientes(){
    
    $.ajax({
        url:"http://192.9.141.214:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta)
            //pintarCategoria(respuesta);
        }
    });
}