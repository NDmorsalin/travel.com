   // /*  */
   var ctx = document.getElementById('myChart').getContext('2d');
   var myChart = new Chart(ctx, {
       type: 'bar',
       data: {
           labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
           datasets: [
               {
               label: 'Registered',
               data: [100, 19, 30, 50, 20, 37, 75],
               backgroundColor: '#E0E4F4',
               borderWidth: 1,
               borderRadius: 20,
           },
           {
               label: 'Guests',
               data: [10, 19, 30, 50, 20, 37, 75],
               backgroundColor:'#F86549',                
               borderWidth: 1,
               borderRadius: 20,
           }
       ]
       },
       options: {
           scales: {
               y: {                       
               suggestedMax: 100,
                   beginAtZero: true
               }
           }
       }
   });