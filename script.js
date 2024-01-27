'use strict';
marksHeight=1.69
marksMass=78
johnsHeight=1.69
johnsMass=78

marksBMI=marksMass/marksHeight**2
johnsBMI=johnsMass/johnsHeight**2

if(marksBMI>johnsBMI){
    alert(`Mark's BMI (${marksBMI}) has a higher BMI than John's BMI (${johnsBMI})`)
}
else if(marksBMI>johnsBMI){
    alert(`John's BMI (${johnsBMI}) has a higher BMI than Mark's BMI (${marksBMI})`)
}
else{
    alert(`Mark's BMI (${marksBMI}) and John's BMI (${johnsBMI}) are equal`)
}