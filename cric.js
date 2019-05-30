//Initial Ratings
         //Associative array
         const ratings = {
            sachin : 4.5,
            dhoni: 4.7,
            virat : 4.3,
            hardik : 3.6,
            rohit : 4.1
        }

        //Total Stars
        const starsTotal = 5;
        
        //Run getRatings when DOM loads
        document.addEventListener('DOMContentLoaded',getRatings);


        //Form Elements
        const playerSelect = document.getElementById('player-select');
        const ratingControl = document.getElementById('rating-control');

        //Init Product
         var player;

       //Product select change
       playerSelect.addEventListener('change' ,(e) => { player = e.target.value;
                                                         ratingControl.disabled = false;
                                                         ratingControl.value = ratings[player]; 
                                                       });
       
       //Rating Control Changes
       ratingControl.addEventListener('blur', (e) => {
                                                        const rating = e.target.value;
                                                        if( rating > 5)
                                                        {
                                                            alert('PLease rate btw 1-5');
                                                            return;
                                                        } 
                                                        ratings[player] = rating;
                                                        getRatings();
       });

        //Get Ratings
        function getRatings()
        {
           // console.log('ran');
           //Acessing associative array elements
           for(var rating in ratings)
           {
               //console.log(ratings[rating]);
               //Get Percentage
               const starPercentage = (ratings[rating]/starsTotal)*100;
               
               //console.log(starPercentage);
           
               //Round that to nearest 10
               const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
 
               //console.log(starPercentageRounded);
               //Identifying particular type of object
               document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

               //Add number rating
               document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];

           }
        }
