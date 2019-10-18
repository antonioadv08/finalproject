(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),l=a.n(c),s=(a(55),a(2)),i=a(3),o=a(5),u=a(4),m=a(6),h=(a(57),a(117)),d=a(118),p=a(119),E=a(20),f=a(115),g=a(7),v=a.n(g),b=function e(){var t=this;Object(s.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentUser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.addcompany=function(e){return t.service.post("/addcompany",{company:e}).then(function(e){return e.data})},this.service=v.a.create({baseURL:"http://localhost:3010/api/auth",withCredentials:!0})},O=(a(76),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.state={loggedInUser:null},a.service=new b,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(E.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/watchlist"},"Watchlist")),r.a.createElement("li",null,r.a.createElement("a",{onClick:this.handleLogout,class:"links"},"Logout")),r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/forexpanel"},"Forexpanel")),r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/news"},"News")))):r.a.createElement("nav",{className:"nav-style"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/forexpanel"},"Forexpanel")),r.a.createElement("li",null,r.a.createElement(f.a,{class:"links",to:"/news"},"News"))))}}]),t}(n.Component)),j=a(16),y=(a(80),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:""}),a.props.getUser(e.user)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a.state={username:"",password:""},a.service=new b,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"log-form"},r.a.createElement("h2",null,"Create your account"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",title:"username",placeholder:"username",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"password",title:"username",placeholder:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",class:"btn",value:"Signup"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component)),k=(a(82),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a.state={username:"",password:""},a.service=new b,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"log-form"},r.a.createElement("h2",null,"Login to your account"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{autoComplete:"off",type:"text",name:"username",title:"username",placeholder:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{autoComplete:"off",type:"password",title:"username",placeholder:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",class:"btn",value:"Login"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component)),w=(a(84),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getData=function(t){v.a.get("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=".concat(t,"&apikey=").concat("247QRNTD6G5X6Q7Q")).then(function(a){e.setState({search:t,name:a.data.bestMatches})})},e.handleSearch=function(t){var a=t.target.value;e.setState({search:a});var n=a;e.getData(n)},e.state={name:["undefined"],search:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{class:"inputdiv"},r.a.createElement("input",{autoComplete:"off",class:"inputscreener",placeholder:"Search by ticker or company name...",type:"text",name:"search",id:"search",value:this.state.search,onChange:this.handleSearch})),r.a.createElement("div",{class:"tabladesplegable"},Array.isArray(this.state.name)&&this.state.name.map(function(e){return r.a.createElement("table",{class:"screenertable"},r.a.createElement("tr",{class:"trscreener"},r.a.createElement(f.a,{class:"linkscreener",to:"/stockdetail/".concat(e["1. symbol"])},r.a.createElement("td",{class:"namecompany"},r.a.createElement("p",{class:"pscreener"},e["2. name"])),r.a.createElement("td",{class:"symbolcompany"},r.a.createElement("p",{class:"pscreener"},e["1. symbol"])))))}))))}}]),t}(n.Component)),U=a(49),x=a(30),C=a.n(x),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={options:{title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}},series:[{data:[{}]}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.data.map(function(e){return{x:e.date,y:[e.open,e.high,e.low,e.close]}}),t=[{data:Object(U.a)(e)}];return r.a.createElement("div",{id:"chart"},r.a.createElement(C.a,{options:this.state.options,series:t,type:"candlestick",width:"700",height:"600"}))}}]),t}(n.Component),D=(a(89),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){v.a.get("https://financialmodellingprep.com/api/v3/historical-price-full/".concat(e)).then(function(e){a.setState({name:e.data.historical})})},a.getProfile=function(e){v.a.get("https://financialmodellingprep.com/api/v3/company/profile/".concat(e)).then(function(e){e=0===Object.entries(e.data).length&&e.data.constructor===Object?null:e.data.profile,a.setState({profile:e})})},a.getNews=function(e){v.a.get("https://newsapi.org/v2/everything?language=en&q=".concat(e,"&sortBy=publishedAt&apiKey=").concat("c2734b6153b349f2af850def3150b604")).then(function(e){e=0===Object.entries(e.data).length&&e.data.constructor===Object?null:e.data.articles,a.setState({news:e})})},a.savecompanyID=function(){a.services.addcompany(a.props.companyID)},a.state={name:[],profile:[],news:[]},a.services=new b,a.getInfo(a.props.companyID),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.getInfo(e.companyID)}},{key:"getInfo",value:function(e){this.getData(e),this.getProfile(e),this.getNews(e)}},{key:"render",value:function(){var e=this;return console.log(this.state.profile),r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("div",{class:"distribution"},null!=this.state.profile?r.a.createElement("div",{class:"stocksdetailscomponents"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:this.state.profile.image,alt:""})),r.a.createElement("h1",null,this.state.profile.companyName)),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"CEO:"),r.a.createElement("td",{class:"tdright"},this.state.profile.ceo)),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Stock price:"),r.a.createElement("td",{class:"tdright"},this.state.profile.price,"  $")),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Market Cap:"),r.a.createElement("td",{class:"tdright"},this.state.profile.mktCap,"  $")),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Last dividend:"),r.a.createElement("td",{class:"tdright"},this.state.profile.lastDiv,"  $")),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Changes percentage:"),r.a.createElement("td",{class:"tdright"},this.state.profile.changesPercentage)),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Description:"),r.a.createElement("td",{class:"tdright"},this.state.profile.description)),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Sector:"),r.a.createElement("td",{class:"tdright"},this.state.profile.sector)),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Daily average volume:"),r.a.createElement("td",{class:"tdright"},this.state.profile.volAvg)),r.a.createElement("tr",{class:"tdleft"},r.a.createElement("td",null,"Web:"),r.a.createElement("td",{class:"tdright"},r.a.createElement("a",{href:this.state.profile.website,target:"_blank",rel:"noopener noreferrer"},this.state.profile.website))),r.a.createElement("tr",null,r.a.createElement("button",{class:"btnfollowstock",onClick:function(){return e.savecompanyID()}},"Add to watchlist")))):r.a.createElement("div",null,r.a.createElement("h1",null,"No data avaible for this stock")),null!=this.state.name?r.a.createElement(S,{class:"chartstockdetail",data:this.state.name}):r.a.createElement("div",null,r.a.createElement("h1",null,"No chart avaible for this stock")),r.a.createElement("div",{class:"stocksdetailscomponents"},null!=this.state.news?r.a.createElement("table",{class:"newstablestocksdetail"},r.a.createElement("tr",null,r.a.createElement("th",null,"News")),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.news.map(function(e){return r.a.createElement("div",{class:"insidenews"},r.a.createElement("div",null,r.a.createElement("img",{src:e.urlToImage,width:"170px",height:"130px"})),r.a.createElement("div",{class:"titleanddescription"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h2",null,e.title)),r.a.createElement("p",null,e.description)))})))):r.a.createElement("div",null,r.a.createElement("h1",null,"No news avaible for this stock")))))}}]),t}(n.Component)),I=(a(91),a(48)),N=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"centerContent"},r.a.createElement("div",{className:"selfCenter standardWidth"},r.a.createElement(I.a,{sourceType:"profile",screenName:"realDonaldTrump",options:{height:600,width:600}}))))}}]),t}(n.Component),M=a(46),A=a.n(M),T=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.a,{url:"https://www.youtube.com/watch?v=zg_YUu2JzEA",playing:!0,muted:"yes",controls:"yes"}),"               ")}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getNews=function(){v.a.get("https://newsapi.org/v2/everything?language=en&q=stocks&sortBy=publishedAt&apiKey=".concat("c2734b6153b349f2af850def3150b604")).then(function(e){a.setState({news:e.data.articles})})},a.state={news:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNews()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"divnews"},r.a.createElement("table",{class:"newstablenews"},r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("h1",null,"News"))),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.news.map(function(e){return r.a.createElement("div",{class:"insidenews"},r.a.createElement("div",null,r.a.createElement("img",{src:e.urlToImage,width:"170px",height:"130px"})),r.a.createElement("div",{class:"titleanddescription"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h3",{class:"h3home"},e.title)),r.a.createElement("p",null,e.description)))})))),r.a.createElement("div",{class:"tvdiv"},r.a.createElement(T,null)),r.a.createElement(N,null)))}}]),t}(n.Component),_=(a(98),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(){v.a.get("https://financialmodellingprep.com/api/v3/stock/gainers").then(function(e){a.setState({name:e.data.mostGainerStock})})},a.state={name:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{class:"mostgainerstable"},r.a.createElement("tr",null," ",r.a.createElement("h3",null," Most gainers")),r.a.createElement("tr",null,r.a.createElement("th",null,"Ticker"),r.a.createElement("th",null,"Company name"),r.a.createElement("th",null,"Price change")),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement(f.a,{to:"stockdetail/".concat(e.ticker)},r.a.createElement("p",null,e.ticker))})),r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement(f.a,{to:"stockdetail/".concat(e.ticker)},r.a.createElement("p",null,e.companyName))})),r.a.createElement("td",null," ",this.state.name.map(function(e){return r.a.createElement("p",null,e.changesPercentage)})))))}}]),t}(n.Component)),L=(a(100),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(){v.a.get("https://financialmodellingprep.com/api/v3/stock/losers").then(function(e){a.setState({name:e.data.mostLoserStock})})},a.state={name:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{class:"mostloserstable"},r.a.createElement("tr",null,r.a.createElement("h3",null,"Most losers")),r.a.createElement("tr",null,r.a.createElement("th",null,"Ticker"),r.a.createElement("th",null,"Company name"),r.a.createElement("th",null,"Price change")),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement(f.a,{to:"stockdetail/".concat(e.ticker)},r.a.createElement("p",null,e.ticker))})),r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement(f.a,{to:"stockdetail/".concat(e.ticker)},r.a.createElement("p",null,e.companyName))})),r.a.createElement("td",null," ",this.state.name.map(function(e){return r.a.createElement("p",null,e.changesPercentage)})))))}}]),t}(n.Component)),R=(a(102),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(){v.a.get("https://financialmodellingprep.com/api/v3/stock/actives").then(function(e){a.setState({name:e.data.mostActiveStock})})},a.state={name:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{class:"mostactivetable"},r.a.createElement("tr",{class:"titletable"}," ",r.a.createElement("h3",null,"Most active")),r.a.createElement("tr",null,r.a.createElement("th",null,"Ticker"),r.a.createElement("th",null,"Company name"),r.a.createElement("th",null,"Price change")),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement(f.a,{to:"stockdetail/".concat(e.ticker)},r.a.createElement("p",null,e.ticker))})),r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement(f.a,{to:"stockdetail/".concat(e.ticker)},r.a.createElement("p",null,e.companyName))})),r.a.createElement("td",null," ",this.state.name.map(function(e){return r.a.createElement("p",null,e.changesPercentage)})))))}}]),t}(n.Component)),H=(a(104),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(){v.a.get("https://financialmodellingprep.com/api/v3/stock/sectors-performance").then(function(e){a.setState({name:e.data.sectorPerformance})})},a.state={name:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{class:"sectorperfomancetable"},r.a.createElement("h3",null,"Sector perfomance"),r.a.createElement("tr",null,r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement("p",null,e.sector)})),r.a.createElement("td",null,this.state.name.map(function(e){return r.a.createElement("p",null,e.changesPercentage)})))))}}]),t}(n.Component)),F=(a(106),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e)))._ref=r.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-events.js",e.async=!0,e.innerHTML=this._ref.current.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{class:"tradingview-widget-container",ref:this._ref},r.a.createElement("div",{class:"tradingview-widget-container__widget"}))}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getHomechart=function(){v.a.get("https://financialmodellingprep.com/api/v3/historical-price-full/SPY").then(function(e){a.setState({homedata:e.data.historical})})},a.getData=function(){v.a.get("https://financialmodellingprep.com/api/v3/majors-indexes/.INX").then(function(e){a.setState({name:e.data})})},a.getNews=function(){v.a.get("https://newsapi.org/v2/everything?language=en&q=stocks&sortBy=publishedAt&apiKey=".concat("c2734b6153b349f2af850def3150b604")).then(function(e){a.setState({news:e.data.articles})})},a.state={name:[],news:[],homedata:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData(),this.getNews(),this.getHomechart()}},{key:"render",value:function(){return console.log(this.state.name),r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("div",{class:"contenderdiv"},r.a.createElement("div",{class:"divtableandchart"},r.a.createElement("table",{className:"sp500table"},r.a.createElement("td",null,r.a.createElement("tr",null,r.a.createElement("h1",null,this.state.name.indexName)),r.a.createElement("tr",null,"STOCK MARKET INDEX"),r.a.createElement("tr",null,r.a.createElement("p",null,"INDEX VALUE: ",r.a.createElement("h2",null,this.state.name.price)," points")),r.a.createElement("tr",null,this.state.name.changes,"%"))),r.a.createElement(S,{height:"500px",data:this.state.homedata}),r.a.createElement(H,null)),r.a.createElement("div",{class:"stockspanel"},r.a.createElement(_,null),r.a.createElement(L,null),r.a.createElement(R,null),r.a.createElement("div",{class:"stockspaneldown"}))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){v.a.get("https://financialmodellingprep.com/api/v3/historical-price-full/".concat(e)).then(function(e){a.setState({name:e.data.historical})})},a.state={name:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData(this.props.companyID)}},{key:"render",value:function(){return console.log(this.state.name),r.a.createElement("div",null,r.a.createElement("div",null))}}]),t}(n.Component),X=a(19),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={ticker:"",nameCompany:"",recomendation:"",charturl:""},a.handleChange=a.handleChange.bind(Object(X.a)(Object(X.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(X.a)(Object(X.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({ticker:e.target.ticker,nameCompany:e.target.nameCompany,recomendation:e.target.advice,charturl:e.target.url})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{action:"/stockadvice",method:"POST",enctype:"multipart/form-data",onSubmit:this.handleSubmit},r.a.createElement("label",null,"ticker:",r.a.createElement("input",{type:"text",for:"ticker",value:this.state.ticker,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit"}),r.a.createElement("br",null),r.a.createElement("label",null,"nameCompany"),r.a.createElement("input",{type:"text",for:"namecompany",value:this.state.nameCompany,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"advice"),r.a.createElement("input",{for:"recomendation",type:"text",value:this.state.recomendation,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Upload chart"),r.a.createElement("input",{value:this.state.charturl,type:"file"}),r.a.createElement("br",null))}}]),t}(n.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",null,"follow stock"))}}]),t}(n.Component),G=(a(108),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getData=function(e){v.a.get("https://financialmodellingprep.com/api/v3/company/profile/".concat(e)).then(function(e){console.log(e.data),a.setState(Object(E.a)({},a.state,{name:e.data.companyProfiles}))})},a.service=new b,a.state={loggedInUser:{stocks:[]},stocks:null,name:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.loggedin().then(function(t){return e.setState(Object(E.a)({},e.state,{stocks:t.stocksFollow}),e.getData(t.stocksFollow))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){console.log(this.state.name);var e=this.state.name.map(function(e){return Object.keys(e.profile).map(function(t,a){return Object(j.a)({},t,Object.values(e.profile)[a])})});return console.log(e),r.a.createElement("div",null,r.a.createElement("h3",null,"Watchlist"),r.a.createElement("table",{class:"watchlisttable"},Array.isArray(e)?e.map(function(e){return e.map(function(e){return r.a.createElement("div",null,r.a.createElement("tr",null,r.a.createElement("td",null," ",r.a.createElement("img",{src:e.image})),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.changesPercentage)))})}):null),Array.isArray(this.state.stocks)?r.a.createElement("td",null,this.state.stocks.map(function(e){return r.a.createElement("div",null,r.a.createElement(f.a,{to:"stockdetail/".concat(e)},"  ",r.a.createElement("p",null,e)))})):null)}}]),t}(n.Component)),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e)))._ref=r.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",e.async=!0,e.innerHTML={symbols:[{title:"S&P 500",proName:"OANDA:SPX500USD"},{title:"Nasdaq 100",proName:"OANDA:NAS100USD"},{title:"EUR/USD",proName:"FX_IDC:EURUSD"},{title:"BTC/USD",proName:"BITSTAMP:BTCUSD"},{title:"ETH/USD",proName:"BITSTAMP:ETHUSD"}],colorTheme:"light",isTransparent:!1,displayMode:"compact",locale:"es"},this._ref.current.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{class:"tradingview-widget-container",ref:this._ref},r.a.createElement("div",{class:"tradingview-widget-container__widget"}))}}]),t}(n.Component),J=(a(110),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e)))._ref=r.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js",e.async=!0,e.innerHTML=this._ref.current.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{ref:this._ref})}}]),t}(n.Component)),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e)))._ref=r.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js",e.async=!0,e.innerHTML=this._ref.current.appendChild(e)}},{key:"render",value:function(){return r.a.createElement("div",{class:"forexpanelallocation",ref:this._ref},r.a.createElement(J,null))}}]),t}(n.Component),Y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.state={loggedInUser:null},a.service=new b,a.fetchUser(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"fetchUser",value:function(){var e=this;return this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{to:"/home"}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement($,null),r.a.createElement(O,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement("div",{class:"logoimage"},r.a.createElement("img",{src:"https://i.ibb.co/xHhRv57/Logo-Makr-3-X4c-ID.png",width:"200",height:"141px","margin-top":"10px"})),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/Screener",render:function(){return r.a.createElement(w,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/stockdetail/:companyID",render:function(t){return r.a.createElement(D,{companyID:t.match.params.companyID,getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/tv",render:function(){return r.a.createElement(T,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/chart",render:function(){return r.a.createElement(S,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/news",render:function(){return r.a.createElement(P,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/home",render:function(){return r.a.createElement(B,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/mostGainers",render:function(){return r.a.createElement(_,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/mostLosers",render:function(){return r.a.createElement(L,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/mostActive",render:function(){return r.a.createElement(R,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/sectorsPerfomance",render:function(){return r.a.createElement(H,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/stockNumbers",render:function(){return r.a.createElement(W,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/createRecomendation",render:function(){return r.a.createElement(q,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/followbutton",render:function(){return r.a.createElement(K,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/watchlist",render:function(){return r.a.createElement(G,{userInSession:e.state.loggedInUser,getUser:e.fecthUser})}}),r.a.createElement(p.a,{exact:!0,path:"/tickertape",render:function(){return r.a.createElement($,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/economiccalendar",render:function(){return r.a.createElement(F,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/forexpanel",render:function(){return r.a.createElement(Q,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(B,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/twitter",render:function(){return r.a.createElement(N,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/hotmap",render:function(){return r.a.createElement(J,{getUser:e.getUser})}})),r.a.createElement(Y,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement($,null),r.a.createElement(O,{userInSession:this.state.loggedInUser,logout:this.logout}),r.a.createElement("div",{class:"logoimage"},r.a.createElement("img",{src:"https://i.ibb.co/xHhRv57/Logo-Makr-3-X4c-ID.png",width:"200",height:"141px","margin-top":"10px"})),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(y,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(k,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/Screener",render:function(){return r.a.createElement(w,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/stockdetail/:companyID",render:function(t){return r.a.createElement(D,{companyID:t.match.params.companyID,getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/tv",render:function(){return r.a.createElement(T,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/chart",render:function(){return r.a.createElement(S,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/news",render:function(){return r.a.createElement(P,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/home",render:function(){return r.a.createElement(B,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/mostGainers",render:function(){return r.a.createElement(_,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/mostLosers",render:function(){return r.a.createElement(L,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/mostActive",render:function(){return r.a.createElement(R,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/sectorsPerfomance",render:function(){return r.a.createElement(H,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/stockNumbers",render:function(){return r.a.createElement(W,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/createRecomendation",render:function(){return r.a.createElement(q,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/followbutton",render:function(){return r.a.createElement(K,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/watchlist",render:function(){return r.a.createElement(G,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/tickertape",render:function(){return r.a.createElement($,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/economiccalendar",render:function(){return r.a.createElement(F,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/forexpanel",render:function(){return r.a.createElement(Q,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(B,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/twitter",render:function(){return r.a.createElement(N,{getUser:e.getUser})}}),r.a.createElement(p.a,{exact:!0,path:"/hotmap",render:function(){return r.a.createElement(J,{getUser:e.getUser})}})))))}}]),t}(n.Component),V=a(116);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V.a,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,a){e.exports=a(113)},55:function(e,t,a){},57:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},98:function(e,t,a){}},[[50,2,1]]]);
//# sourceMappingURL=main.11a47bd9.chunk.js.map