function scuberGreetingForFeet(ride){
  
  if (ride <= 400)
  {
    let result = "This one is on me!";
    return result;
  }
  else if (ride >400 && ride <2000)
  {
    let cost = "That will be twenty bucks.";
    return cost;
  }
  else if (ride > 2000 && ride < 2500)
  {
    let cost2 = "I will gladly take your thirty bucks.";
    return cost2;
  }
  else ( ride > 2500)
  {
    let cost3 = "No can do.";
    return cost3;
  }
}

function ternaryCheckCity(city){
  city === "NYC"? (city ="Ok, sounds good."):(city ="No go.");
  return city;
  // Write your code here!
}


function switchOnCharmFromTip(tip)
{
  switch (tip)
  {
    case "generous": 
    return "Thank you so much.";
    break;

    case "not generous": 
    return "Thank you.";
    break;
    default: return "Bye.";
  }
  
  // Write your code here!
}