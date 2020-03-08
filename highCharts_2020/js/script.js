/* modifico propiedades del modal */
$(".modal-header").css("background-color", "#dc3545");
$(".modal-header").css("color", "white");

/* capturo el evento click  */
$("#btnColumnas").click(function() {
  columnas();
});
$("#btnLineas").click(function() {
  lineas();
});

var char1, options;
$("#btnBD").click(function() {
  $(".modal-title").text("Grafico de Productos con Base de datos");
  $(".modal-header").css("background-color", "#17a2b8");
   $("#modal-1").modal("show");
  $.ajax({
    url: "./bd/graficos.php",
    type: "POST",
    dataType: "json",
    success: function(data) {
      options.series[0].data = data; /* guarda los datos recibidos */
      /* se le asigna los valores al grafico */

      chart1 = new Highcharts.Chart(options);/* instancia y aplica las opciones */
      console.log(data);
    }
  });
  datos();
});
$("#btnTorta").click(function() {
  $(".modal-title").text("Grafico Torta (Pie)");
  $("#modal-1").modal("show");
  torta();
});
function datos() {
  var v_modal = $("#modal-1").modal({ show: false });
  options = {
    chart: {
      renderTo: "contenedor-modal", /* lugar de renderizado */
      type: "column"
    },
    title: {
      text: "Stock de Productos"
    },
    xAxis:{
      type:'category' 
    },
    yAxis: {
      title: {
        text: "Cantidad"
      }
    },
    plotOptions: {
      series: {
        borderWidth: 1,
        dataLabels: {
          enabled: true,
          format: "{point.y:.0f}" /* label que se ve encima de la barra */
        }
      }
    },
    tooltip: {
      headerFormat: "<span style='font-size:11px';>{series.name}</span><br>",/* header de la notificacion  */
      pointFormat:
        "<span style='color:{point.color}'>{point.name}</span>: <b>{point.y:.0f}</b>" /* notificacion flotante */
    },
    series: [
      {
        name: "Productos",
        colorByPoint: true,
        data: [] /* no se pone nada porque los datos ya estan asignados */
      }
    ]
  };
}
function torta() {
  Highcharts.chart("contenedor-modal", {
    chart: {
      type: "pie",
      plotBackgroundColor: "#f8f9fa" /* color de fondo */,
      plotBorderwidth: 1,
      plotShadown: false
    },
    title: {
      text: "Uso de Navegadores web 2020"
    },
    tooltip: {
      /* formato de labels al pasar por alguna porcion*/
      pointFormat: "{series.name}:<b>{point.percentage:.2f}</b>%"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true /* permite la seleccion de */,
        cursor: "pointer" /* cambia el puntero al seleccionar */,
        dataLabels: {
          enabled: true /* activa los labels */,
          format:
            "{point.name}:<b>{point.percentage:.2f}</b>%" /* formato de label general */
        }
      }
    },
    series: [
      {
        name: "Marcas",
        colorByPoint: true /* que le asigne color aleatorio */,
        data: [
          {
            name: "Chrome",
            y: 61.41,
            sliced: true /* cortada */,
            selected: true /* seleccionada */
          },
          {
            name: "Internet Explorer ",
            y: 11.84
          },
          {
            name: "Edge Chromium",
            y: 4.67
          },
          {
            name: "Safari",
            y: 4.18
          },
          {
            name: "Mozilla Firefox",
            y: 1.64
          },
          {
            name: "Opera",
            y: 1.6
          },
          {
            name: "Otras",
            y: 3.81
          }
        ]
      }
    ]
  });
}
function columnas() {
  Highcharts.chart("contenedor", {
    chart: {
      type: "column"
    },
    title: {
      text: "Graficos de columnas con Profundidad" /* Titulo frontal */
    },
    xAxis: {
      type: "category",
      title: {
        text: "Modelos Celulares 2020" /* titulo en eje x */
      }
    },
    yAxis: {
      title: {
        text: "Cantidad de modelos por Marca" /* titulo en eje x */
      }
    },
    series: [
      {
        name: "Moviles" /* titulo general */,
        colorByPoint: true,
        data: [
          {
            name: "Samsung",
            y: 5 /* cantidad de modelos */,
            drilldown: "samsung" /* id  */
          },
          {
            name: "Xiomi",
            y: 3 /* cantidad de modelos */,
            drilldown: "xiomi" /* id  */
          },
          {
            name: "Motorola",
            y: 6 /* cantidad de modelos */,
            drilldown: "motorola" /* id  */
          }
        ]
      }
    ],
    drilldown: {
      /* drilldown esto lo que desplegara */
      series: [
        {
          id: "samsung" /* id */,
          data: [
            /* la cantidad esta asignada en y */
            ["Samsung Galaxy S10", 5],
            ["Samsung Galaxy 3", 3],
            ["Samsung Note 9", 6],
            ["Samsung Galaxy S10", 8],
            ["Samsung Galaxy S10", 10]
          ]
        },
        {
          id: "xiomi",
          data: [
            ["Xiomi Mi 4", 4],
            ["Xiomi Readmi Note", 6],
            ["Xiomi Mi A3", 15]
          ]
        },
        {
          id: "motorola",
          data: [
            ["Motorola G4 Plues", 4],
            ["Moto Google", 6],
            ["G PLUS 3", 6],
            ["Motorola G4", 6],
            ["Motorola Mini", 6],
            ["Motorola 2020", 6]
          ]
        }
      ]
    }
  });
}
function lineas() {
  Highcharts.chart("contenedor", {
    chart: {
      type: "line"
    },
    title: {
      text: "Crecimiento de empleados por Areas"
    },
    xAxis: {
      allowDecimals: false /* desactivo los decimales */
    },
    yAxis: {
      title: {
        text: "Numero de Empleados"
      }
    },
    legend: {
      /* opciones de la leyenda */
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },
    plotOptions: {
      series: {
        pointStart: 2020 /* desde donde va iniciar */
      }
    },
    series: [
      {
        name: "Instalacion",
        data: [1000, 2000, 3000, 1500]
      },
      {
        name: "Fabricacion",
        data: [2500, 2000, 4000, 3000]
      },
      {
        name: "Ventas",
        data: [1000, 2500, 3000, 6000]
      }
    ]
  });
}
$("#btnPrueba").click(function() {
  $(".modal-title").text("Grafico de Pruebas - Primera forma");
  $("#modal-1").modal("show");
  prueba();
});
$("#btnPrueba2").click(function() {
  $(".modal-title").text("Segunda forma");
  $("#modal-1").modal("show");
  prueba2();
});
$("#btnPrueba3").click(function() {
  $(".modal-title").text("Tercera forma");
  $("#modal-1").modal("show");
  prueba3();
});
function prueba() {
  Highcharts.chart("contenedor-modal", {
    chart: {
      type: "line"
    },
    title: {
      text: "Valores Mensuales"
    },
    xAxis: {
      categories: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ]
    },
    series: [
      {
        data: [3, 8, 5, 2, 8, 1, 22, 2, 11, 10, 6, 5]
      }
    ]
  });
}
function prueba2() {
  Highcharts.chart("contenedor-modal", {
    title: {
      text: "Segunda forma"
    },
    xAxis: {
      minPadding: 0.05,
      maxPadding: 0.05
    },
    series: [
      {
        /* eje x, y */
        data: [
          [0, 20.5],
          [3, 10.2],
          [5, 30.5]
        ]
      }
    ]
  });
}
function prueba3() {
  Highcharts.chart("contenedor-modal", {
    chart: {
      type: "column"
    },
    title: {
      text: "Tercera Forma"
    },
    xAxis: {
      categories: ["Rojo", "Verde", "Negro"]
    },
    series: [
      {
        data: [
          {
            name: "Color 1",
            color: "red",
            y: 30
          },
          {
            name: "Color 2",
            color: "green",
            y: 15
          },
          {
            name: "Color 3",
            color: "black",
            y: 100
          }
        ]
      }
    ]
  });
}
