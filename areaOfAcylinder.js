const cylinder =
{
    radius:2,
    height:2,
    area:function()
    {
        const pi=Math.PI;
        return pi*Math.pow(cylinder.radius,2)*cylinder.height;
    }
};
const area1=cylinder.area()
console.log(area1);





