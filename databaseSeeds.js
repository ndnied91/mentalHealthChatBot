
const mongoose  = require("mongoose");


var resultsSchema = new mongoose.Schema({
    keyword : String,
    title : String,
    body: String,
    link: String,
    phoneNumber: String,
    created: { type: Date, default: Date.now }
});


var Result = mongoose.model("Results", resultsSchema);



//Anxiety

Result.create({
    keyword: "anxious",
    title: "National Hotline",
    body: "National Hotline if you need someone to speak to immediately",
    link : "https://www.samhsa.gov/find-help/national-helpline",
    phoneNumber: "1-800-662-HELP(4357)"
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: "Info / FREE Call Mental and/or substance use disorders. ",
    body: "Info / FREE Call Mental and/or substance use disorders" ,
    link : "https://www.samhsa.gov/find-help/national-helpline"
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: "Mental Health Info",
    body : "Mental Health Info" ,
    link : "https://www.samhsa.gov/find-help/disorders"
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: "Get Free Help Now",
    body: "If you'd rathen text someone then call them",
    link : "https://www.crisistextline.org/textline/",
    phoneNumber: "Text CONNECT to 741741"
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: "Tips on combatting Anxiety",
    body: "Hera are some quick tips on battling anxiety",
    link : "https://adaa.org/tips"
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: "How to Stop Feeling Anxious Right Now",
    body: "Find quick ways to battle anxiety" ,
    link : "https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety"
}, ()=>{
  console.log('created successfully anxious ');
});
Result.create({
    keyword: "anxious",
    title: " 16 Simple Ways to Relieve Stress and Anxiety ",
    body: "Find quick ways to battle anxiety",
    link : "https://www.healthline.com/nutrition/16-ways-relieve-stress-anxiety"
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: " Treatment center locator ",
    body: "Locate a treatment center near you ",
    link : "https://findtreatment.samhsa.gov/locator"
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: " Find Treatment",
    body: "Locate a treatment center near you",
    link : "https://www.findtreatment.gov",
    phoneNumber : '1-800-662-HELP (4357)'
}, ()=>{
  console.log('created successfully anxious');
});
Result.create({
    keyword: "anxious",
    title: " Directory of NJ Services",
    body: "Directory of NJ Services",
    link : "https://www.state.nj.us/humanservices/dmhas/home/hotlines/MH_Dir_COMPLETE.pdf"
}, ()=>{
  console.log('created successfully anxious');
});







//Depression

Result.create({
    keyword: "depressed",
    title: "Depression",
    body: "Info about Depression",
    link : "https://www.nimh.nih.gov/health/topics/depression/index.shtml"
}, ()=>{
  console.log('created successfully depression');
});

Result.create({
    keyword: "depressed",
    title: "Depression Hotline",
    body: "Holtine to Call 1-800-273-8255",
    link : "https://www.mentalhelp.net/depression/hotline/"
}, ()=>{
  console.log('created successfully depression');
});

Result.create({
    keyword: "depressed",
    title: "Depression Hotline (chat)",
    body: "If you rathen chat with someone ",
    link :  "https://suicidepreventionlifeline.org/chat/"
}, ()=>{
  console.log('created successfully depression');
});

Result.create({
    keyword: "depressed",
    title: "Help with Depression",
    body: "If you need help with Depressin",
    link :  "https://www.betterhelp.com/start/?help_with=Depression"
}, ()=>{
  console.log('created successfully depression');
});


Result.create({
    keyword: "depressed",
    title: "Help with Depression",
    body: "If you need help with Depressin",
    link :  "https://www.betterhelp.com/start/?help_with=Depression"
}, ()=>{
  console.log('created successfully depression');
});

Result.create({
    keyword: "depressed",
    title: "Treatment center locator",
    body: "Treatment center locator",
    link :  "https://findtreatment.samhsa.gov/locator"
}, ()=>{
  console.log('created successfully depression');
});

Result.create({
    keyword: "depressed",
    title: "Find Treatment",
    body: "Find Treatment",
    link : "https://www.findtreatment.gov",
    phoneNumber: "1-800-662-HELP (4357)"
}, ()=>{
  console.log('created successfully depression');
});

Result.create({
    keyword: "depressed",
    title: "National Hotline",
    body: "National Hotline",
    link :"https://www.samhsa.gov/find-help/national-helpline"
}, ()=>{
  console.log('created successfully depression');
});



Result.create({
    keyword: "depressed",
    title: "Info / FREE Call Mental and/or substance use disorders.",
    body: "Info / FREE Call Mental and/or substance use disorders",
    link :"https://www.samhsa.gov/find-help/national-helpline"
}, ()=>{
  console.log('created successfully depression');
});



Result.create({
    keyword: "depressed",
    title: "Mental Health Info",
    body: "Mental Health Info",
    link :"https://www.samhsa.gov/find-help/disorders"
}, ()=>{
  console.log('created successfully depression');
});

Result.create({
    keyword: "anxious",
    title: " Directory of NJ Services",
    body: "Directory of NJ Services",
    link : "https://www.state.nj.us/humanservices/dmhas/home/hotlines/MH_Dir_COMPLETE.pdf"
}, ()=>{
  console.log('created successfully anxious');
});






//FOOD

Result.create({
    keyword: "food",
    title: " New Jersey Food Stamp Program ",
    body: "New Jersey Food Stamp Program",
    link : " https://www.nj.gov/humanservices/dfd/programs/njsnap/index.html "
}, ()=>{
  console.log('created successfully food');
});

Result.create({
    keyword: "food",
    title: "New Jersey Food Stamp Program",
    body: " New Jersey Food Stamp Program",
    link : "https://www.nj.gov/humanservices/njsnap/ "
}, ()=>{
  console.log('created successfully food');
});
//
Result.create({
    keyword: "food",
    title: "NJ Helps",
    body: "Use links for those in need",
    link : " https://www.njhelps.org"
}, ()=>{
  console.log('created successfully food');
});
//
//


Result.create({
    keyword: "housing",
    title: "Housing in NJ",
    body: "Housing in NJ",
    link : "https://www.state.nj.us/humanservices/dds/hottopics/housing/index.html"
}, ()=>{
  console.log('created successfully nutrition');
});
Result.create({
    keyword: "housing",
    title: "Type of Housing / Who Qualifies ",
    body: "Type of Housing / Who Qualifies ",
    link : "https://www.nami.org/Find-Support/Living-with-a-Mental-Health-Condition/Securing-Stable-Housing"
}, ()=>{
  console.log('created successfully nutrition');

});
Result.create({
    keyword: "housing",
    title: "Housing Info in NJ ",
    body: "Housing Info in NJ",
    link : "https://www.state.nj.us/humanservices/dmhas/resources/services/recovery/mh_housing.htmlf"
}, ()=>{
  console.log('created successfully nutrition');
});

Result.create({
    keyword: "housing",
    title: "NJ Housing Resources for People With Disabilities ",
    body: "NJ Housing Resources for People With Disabilities ",
    link : "https://www.state.nj.us/humanservices/dds/hottopics/housing/index.html"
}, ()=>{
  console.log('created successfully nutrition');
});





Result.create({
    keyword: "help",
    title: "Locating Treatment Center ",
    body: "Locating Treatment Center ",
    link : "https://findtreatment.samhsa.gov/locator"
}, ()=>{
  console.log('created successfully help');
});
Result.create({
    keyword: "help",
    title: "Find Treatment Location Center",
    body: "Find Treatment Location Center",
    link : "https://www.findtreatment.gov",
    phoneNumber: " 1-800-662-HELP (4357)"
}, ()=>{
  console.log('created successfully help');
});
Result.create({
    keyword: "help",
    title: "Info / FREE Call Mental and/or substance use disorders.",
    body: "Info / FREE Call Mental and/or substance use disorders.",
    link : "https://www.samhsa.gov/find-help/national-helpline"
}, ()=>{
  console.log('created successfully help');
});
Result.create({
    keyword: "help",
    title: "Directory of NJ Services",
    body: "Directory of NJ Services",
    link : "https://www.state.nj.us/humanservices/dmhas/home/hotlines/MH_Dir_COMPLETE.pdf"
}, ()=>{
  console.log('created successfully help');
});



Result.create({
    keyword: "transportation",
    title: "Get to your doctors appointment",
    body: "Ways to get to your doctor",
    link : "https://thinkhealth.priorityhealth.com/no-car-no-problem-6-ways-to-get-to-your-doctor-appointment/"
}, ()=>{
  console.log('created successfully transportation');
});

Result.create({
    keyword: "transportation",
    title: "Get Free Rides with Lyft",
    body: "Get Free Rides with Lyft",
    link : "https://www.komando.com/technology/uber-and-lyft-will-give-you-free-rides-to-the-doctor/442295/"
}, ()=>{
  console.log('created successfully transportation');
});

Result.create({
    keyword: "transportation",
    title: "LogistiCare Medical Transportation",
    body: "LogistiCare Medical Transportation",
    link : "https://www.state.nj.us/humanservices/dds/hottopics/transportation/"
}, ()=>{
  console.log('created successfully transportation');
});

Result.create({
    keyword: "transportation",
    title: "NY Transportation ",
    body: "NY Transportation ",
    link : "https://www.health.ny.gov/health_care/medicaid/redesign/dsrip/2015-12-17_medtrans_overview.htm"
}, ()=>{
  console.log('created successfully transportation');
});





Result.create({
    keyword: "other",
    title: "National Hotline",
    body: "National Hotline if you need someone to speak to immediately",
    link : "https://www.samhsa.gov/find-help/national-helpline",
    phoneNumber: "1-800-662-HELP(4357)"
}, ()=>{
  console.log('created successfully other');
});
Result.create({
    keyword: "other",
    title: "Treatment center Locator",
    body: "Treatment center Locator",
    link : "https://findtreatment.samhsa.gov/locator"
}, ()=>{
  console.log('created successfully other');
});
Result.create({
    keyword: "other",
    title: "National Hotline to Find Help",
    body: "National Hotline to find help",
    link : "https://www.samhsa.gov/find-help/national-helpline",
    phoneNumber: "1-800-662-HELP(4357)"
}, ()=>{
  console.log('created successfully other');
});
Result.create({
    keyword: "other",
    title: "Directory of Mental Health Service in New Jersey",
    body: "Directory of Mental Health Service in New Jersey",
    link : "https://www.nj.gov/humanservices/dmhas/home/hotlines/MH_Dir_COMPLETE.pdf"
}, ()=>{
  console.log('created successfully other');
});
Result.create({
    keyword: "other",
    title: "NJ HELPS Web Page",
    body: "NJ HELPS Web Page",
    link : "https://www.njhelps.org"
}, ()=>{
  console.log('created successfully other');
});
