/* 
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Copyleft(C)  2018 GNU General Public License V3 * * 
 * * *         Made with love in Colombia!!!           * * *
 * *         @Author:... ==>BEANSWALKER<==           * *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var table; // donde vamos a almacenar la información que vamos extrayendo mediante AJAX

//Implementamos la FX que se ejecutará siempre al inicio de la carga del archivo php
function initial()
{
    
}

//Función que va a dejar los campos de los elementos HTML en blanco mediante JQuery...
function clean_fields()
{
    $("#nm").val("");
    $("#id_ctgry").val("");
    $("#dscrptn").val("");
}

//Función para mostrar el formulario:...
function show_form(signal)
{
    clean_fields();//limpiamos los elementos
    if(signal === true)
    {
        //oculto el div contenedor que muestra los registros listados:...
        $("#list_records").hide();
        //muestro el div contenedor que muestra el formulario de ingreso:...
       $("#new_record").show();
       
       //PENDIENTE este botón los podemos activar de forma interactiva con las cajitas de texto:...
       $("#save").prop("disabled",false);
    }
    else
    {
        //muestro el div contenedor que muestra los registros listados:...
        $("#list_records").show();
        //oculto el div contenedor que muestra el formulario de ingreso:...
       $("#new_record").hide();
    }
    
}
//the AJAX function to get a category records list:...
function get_records()
{
    //en la variable global "table" almacenaremos todo el conenido que
    //vamos a obtener de la BD mediante AJAX y que será gestionado por la librería DataTables
    //para mostrarlo en una tabla html:...
    table = $("#table_show_records").dataTable
                                     (
                                      {
                                       "aProcessing":true,//activamos el proceso
                                       "aserverSide":true //****************************************
                                      }
                                     ).DataTable();
}
//INICIO DE LA CARGA PARA EL ARCHIVO PHP:...
//Llamamos a la FX para que se inicie al comienzo:...
initial();

