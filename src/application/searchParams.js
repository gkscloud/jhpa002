module.exports = {

    getDriveTrainTypes(){
        var result = []
        var driveTrainTypes = ["All", "2WD", "ALL WHEEL DRIVE", "AWD", "FWD", "RWD"];
        driveTrainTypes.map(item => {
            result.push({"label": item, "value": item})
        });

        return result;
    },

    getInteriorColors(){
        var result = []
        var colors = ["All", "Beige", "Black", "Brown", "Blue", "Gold", "Gray", "Green", "Orange", "Purple", "Red", "Silver", "White", "Yellow", "Metallic", "Metal"];
        colors.map(item => {
            result.push({"label": item, "value": item})
        });

        return result;
    },

    getExteriorColors(){
        var result = []
        var colors = ["All", "Beige", "Black", "Brown", "Blue", "Gold", "Gray", "Green", "Orange", "Purple", "Red", "Silver", "White", "Yellow", "Metallic", "Metal"];
        colors.map(item => {
            result.push({"label": item, "value": item})
        });

        return result;
    },
    
    getTransmissionTypes(){
        var result = []
        var transmissionTypes = ["Automatic", "Automatic CVT", "Manual"];
        transmissionTypes.map(item => {
            result.push({"label": item, "value": item})
        });

        return result;
    },

    getMileages(){
        var maxMileage = 450000;
        var minMileage = 1000;
        var interval = 10000;
        var mileages = [];
        for (var i=minMileage + 9000; i<=maxMileage; i=i+interval ){
            var start = 0;
            var end = 0;
            var label = "";
            if(i == maxMileage){
                start = minMileage;
                end = maxMileage;
                label = "All";
            }
            else{
                start = minMileage;
                end = i;
                label = i.toLocaleString();
            }
            mileages.push({"start": start, "end": end, "label": label});

        }
        return mileages.reverse();
    },

    getPrices(){
        var maxPrice = 170000;
        var minPrice = 0;
        var interval = 5000;
        var prices = [];
        for (var i=minPrice; i<=maxPrice; i=i+interval ){
            var start = 0;
            var end = 0;
            var label = "";
            if (i == 0){
                //do nothing
            }
            else if(i == maxPrice){
                start = minPrice;
                end = maxPrice;
                label = "All";
            }
            else{
                start = minPrice;
                end = i;
                label = i.toLocaleString();
            }
            prices.push({"start": start, "end": end, "label": label});

        }
        return prices.reverse();
    },

    getYears(){
        var latestYear = new Date().getFullYear() + 1;
        var minYear = latestYear - 20;
        var allYears = [];
        for (var i=minYear; i<=latestYear; i++ ){
            var start = 0;
            var end = 0;
            var label = "";
            if(i == latestYear){
                start = minYear;
                end = latestYear;
                label = "All";
            }
            else{
                start = minYear;
                end = i;
                label = i.toString();
            }
            allYears.push({"start": start, "end": end, "label": label});
        }
        console.log("allYears: ", allYears);
        return allYears.reverse();
    }



}