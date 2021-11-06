(this["webpackJsonpsix-sities-react"]=this["webpackJsonpsix-sities-react"]||[]).push([[0],{48:function(e,t,a){e.exports=a(77)},58:function(e,t,a){},59:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var r=a(20),n=a(14),i=a(0),s=a.n(i),c=a(24),o=a.n(c),l=a(42),m=a(46),u=a(3),p=a(10),d=Object(p.a)(),f=a(5),_=a(6),h=a(7),v=a(8),g=a(30),E={city:"",hotels:[],currentOffer:{},favoriteList:[],isAuthorizationRequired:!0,currentUser:{},reviews:[]},y=function(e,t){var a,r=JSON.parse(localStorage.getItem(e));return r&&(a=r.filter((function(e){return e.currentUser.email===t}))),a},k="SET_CITY",N="LOAD_HOTELS",b="SET_CURRENT_OFFER",w="REQUIRE_AUTHORIZATION",O="SET_CURRENT_USER",C="ADD_FAVORITE",L="REMOVE_FAVORITE",R="SET_FAVORITES",S="SET_REVIEWS",j=function(e){return{type:k,payload:e}},I=function(e){return{type:N,payload:e}},x=function(e){return{type:b,payload:e}},F=function(e){return{type:w,payload:e}},M=function(e){return{type:O,payload:e}},T=function(e,t){var a=function(e,t){return t.length?t.findIndex((function(t){return t.hotelId===e.hotelId})):-1}(e,t);return a<0?{type:"ADD_FAVORITE",payload:e}:{type:"REMOVE_FAVORITE",payload:a}},A=function(e){return{type:"SET_FAVORITES",payload:e}},V=function(e){return{type:"SET_REVIEWS",payload:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object.assign({},e,{city:t.payload});case N:return Object.assign({},e,{hotels:t.payload});case b:return Object.assign({},e,{currentOffer:t.payload});case w:return Object.assign({},e,{isAuthorizationRequired:t.payload});case O:return Object.assign({},e,{currentUser:t.payload});case C:return Object.assign({},e,{favoriteList:[].concat(Object(g.a)(e.favoriteList),[t.payload])});case L:var a=Object(g.a)(e.favoriteList);return a.splice(t.payload,1),Object.assign({},e,{favoriteList:a});case R:return Object.assign({},e,{favoriteList:t.payload});case S:return Object.assign({},e,{reviews:t.payload});default:return e}},B=function(){return function(e,t,a){return a.get("https://run.mocky.io/v3/c3ca7b37-068d-481a-a3f9-b4da256a5f3d").then((function(t){e(I(t.data))}))}},P=function(){return function(e,t,a){return a.get("/login").then((function(t){if(t.data){e(M(t.data)),e(F(!1));var a=y("favorites",t.data.email);a&&e(A(a[0].favoriteList))}})).catch((function(){}))}},q=function(e){return function(t,a,r){return r.post("/login",e).then((function(e){if(e.data){t(M(e.data)),t(F(!1));var a=y("favorites",e.data.email);a&&t(A(a[0].favoriteList))}})).then((function(){return window.history.back()})).catch((function(){}))}},D=function(e){return function(t,a,r){return r.get("/comments/".concat(e)).then((function(e){e.data&&t(V(e.data))}))}},H=a(15),z="/six-cities-react",J={LOGIN:z+"/login",ROOT:z+"/",OFFER:z+"/offer/:id",FAVORITES:z+"/favorites",ERROR:z+"*"},G={FAVORITES:"favorites__locations locations locations--current",LOGIN:"locations locations--login locations--current"},W="input_error",X="input_valid",Y=a(11),Q=a.n(Y),Z=function(e,t){for(var a=0;a<e.length;a++)if(e[a].city.toLowerCase()===t.toLowerCase())return a},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return{iconUrl:z+"/img/pin-active.svg",iconSize:[e,t]}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return{iconUrl:z+"/img/pin.svg",iconSize:[e,t]}},ee=function(e){var t=[];return e.hotels.forEach((function(e){if(e.offers.length){var a,r=Object(H.a)(e.offers);try{for(r.s();!(a=r.n()).done;){var n=a.value;t.push(n)}}catch(i){r.e(i)}finally{r.f()}}})),t},te=function(e,t){return ee(e).filter((function(e){return e.hotelId===+t}))[0]},ae=function(e,t){var a=te(e,t).city;return ee(e).filter((function(e){return e.city===a}))},re=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},ne=function(e,t){return t?X:e.length>0?W:""},ie=a(44),se=a(16),ce=a.n(se),oe=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).handleClickToggle=function(){r.setState((function(e){return{isOpen:!e.isOpen}}))},r.handleClick=function(e){var t=r.props.onChangeOption;document.querySelector(".places__option--active").classList.remove("places__option--active"),r.handleClickToggle(),r.setState({option:e.target.innerHTML}),e.target.classList.add("places__option--active"),t(e.target.innerHTML)},r.state={isOpen:!1,option:"Popular"},r}return Object(_.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{className:"places__sorting",action:"#",method:"get"},s.a.createElement("span",{className:"places__sorting-caption"},"Sort by"),s.a.createElement("span",{className:"places__sorting-type",tabIndex:"0",onClick:this.handleClickToggle},this.state.option,s.a.createElement("svg",{className:"places__sorting-arrow",width:"7",height:"4"},s.a.createElement("use",{xlinkHref:"#icon-arrow-select"}))),s.a.createElement("ul",{className:this.state.isOpen?"places__options\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaces__options--custom\n\t\t\t\t \t\t\t\t\t\t\t\t\tplaces__options--opened":"places__options\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaces__options--custom\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaces__options--closed"},s.a.createElement("li",{className:"places__option places__option--active",tabIndex:"0",onClick:this.handleClick},"Popular"),s.a.createElement("li",{className:"places__option",tabIndex:"0",onClick:this.handleClick},"Price: low to high"),s.a.createElement("li",{className:"places__option",tabIndex:"0",onClick:this.handleClick},"Price: high to low"),s.a.createElement("li",{className:"places__option",tabIndex:"0",onClick:this.handleClick},"Top rated first")))}}]),a}(s.a.PureComponent);oe.propType={onChangeOption:ce.a.func.isRequired};var le=oe,me=a(4),ue={prefix:"property",width:31,height:33},pe={prefix:"place-card",width:18,height:19},de=function(e){var t=e.onBookmarkClick,a=e.isActive,r=e.small,n=r?pe.prefix:ue.prefix,i=a?"".concat(n,"__bookmark-button--active"):"";return s.a.createElement("button",{className:"".concat(n,"__bookmark-button ").concat(i," button"),type:"button",onClick:function(){return t(r)}},s.a.createElement("svg",{className:"".concat(n,"__bookmark-icon"),width:r?pe.width:ue.width,height:r?pe.height:ue.height,style:a?{fill:"#4481c3",stroke:"#4481c3"}:{fill:"none",stroke:"#b8b8b8"}},s.a.createElement("use",{xlinkHref:"#icon-bookmark"})),s.a.createElement("span",{className:"visually-hidden"},"To bookmarks"))},fe=function(e){var t=e.isPremium,a=e.prefix;return t?s.a.createElement("div",{className:"".concat(a,"__mark")},s.a.createElement("span",null,"Premium")):""},_e=function(e){var t=e.rating,a=e.prefix,r=100*t/5;return s.a.createElement("div",{className:"".concat(a,"__rating rating")},s.a.createElement("div",{className:"".concat(a,"__stars rating__stars")},s.a.createElement("span",{style:{width:r+"%"}}),s.a.createElement("span",{className:"visually-hidden"},"Rating")),"property"===a?s.a.createElement("span",{className:"".concat(a,"__rating-value rating__value")},t):"")},he=function(e){var t=e.price,a=e.prefix;return s.a.createElement("div",{className:"".concat(a,"__price")},s.a.createElement("b",{className:"".concat(a,"__price-value")},"\u20ac",t),s.a.createElement("span",{className:"".concat(a,"__price-text")},"place-card"===a?"/":"","\xa0night"))},ve=function(e){var t=e.item,a=e.isFavorite,r=function(t){return e.onClick(t)};return s.a.createElement("article",{className:"cities__place-card place-card",id:t.id,onMouseOver:function(){return a=t,e.onMouseOver(a);var a},onMouseLeave:function(){return e.onMouseLeave()}},s.a.createElement(fe,{isPremium:t.is_premium,prefix:"place-card"}),s.a.createElement("div",{className:"cities__image-wrapper place-card__image-wrapper"},s.a.createElement(me.a,{to:z+"/offer/"+t.hotelId,className:"buttonLink",onClick:function(){return r(t)}},s.a.createElement("img",{className:"place-card__image",src:t.preview_image,width:"260",height:"200",alt:"Place"}))),s.a.createElement("div",{className:"place-card__info"},s.a.createElement("div",{className:"place-card__price-wrapper"},s.a.createElement(he,{price:t.price,prefix:"place-card"}),s.a.createElement(de,{onBookmarkClick:function(a){return function(t,a){return e.onBookmarkClick(t,a)}(t,a)},isActive:a,small:!0})),s.a.createElement(_e,{rating:t.rating,prefix:"place-card"}),s.a.createElement("h2",{className:"place-card__name"},s.a.createElement(me.a,{to:z+"/offer/".concat(t.hotelId),className:"card__title buttonLink",onClick:function(){return r(t)}},t.title)),s.a.createElement("p",{className:"place-card__type"},t.type)))},ge=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;Object(f.a)(this,a),(r=t.call(this,e)).handleClick=function(e){return r.props.onClick(e)},r.handleMouseOver=function(e){return r.props.onMouseOver(e)},r.handleMouseLeave=function(e){return r.props.onMouseLeave(e)},r.handleBookmarkClick=function(e,t){return r.props.onBookmarkClick(e,t)},r.isFavorite=function(e,t){if(e)return!!e.filter((function(e){return e.hotelId===t.hotelId})).length};var n=r.props.items.items;return r.state={items:n},r}return Object(_.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.items,r=t.favoriteList;return a.map((function(t){return s.a.createElement(ve,{item:t,key:t.hotelId,isFavorite:e.isFavorite(r,t),onClick:e.handleClick,onMouseOver:e.handleMouseOver,onMouseLeave:e.handleMouseLeave,onBookmarkClick:e.handleBookmarkClick})}))}}]),a}(s.a.Component),Ee=function(e){var t=e.items,a=e.city,r=e.onClick;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"visually-hidden"},"Cities"),s.a.createElement("div",{className:"tabs"},s.a.createElement("section",{className:"locations container"},s.a.createElement("ul",{className:"locations__list tabs__list"},t.map((function(e,t){return s.a.createElement("li",{className:"locations__item",key:t},s.a.createElement(me.a,{to:z,className:e.city===a?"locations__item-link tabs__item buttonLink tabs__item--active":"locations__item-link tabs__item buttonLink",style:{color:"#000",backgroundColor:"#f5f5f5"},onClick:function(){return r(e.city)},key:t},s.a.createElement("span",null,e.city)))}))))))},ye=function(e){var t=e.city;return s.a.createElement("div",{className:"cities__places-container cities__places-container--empty container"},s.a.createElement("section",{className:"cities__no-places"},s.a.createElement("div",{className:"cities__status-wrapper tabs__content"},s.a.createElement("b",{className:"cities__status"},"No places to stay available"),s.a.createElement("p",{className:"cities__status-description"},"We could not find any property availbale at the moment in ",t))),s.a.createElement("div",{className:"cities__right-section"}))},ke=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e))._initMap=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e,i=Q.a.icon(K()),s=12,c=Q.a.map("map",{center:n,zoom:s,zoomControl:!1,marker:!0});c.setView(n,s),Q.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(c);var o,l=[];a&&(i=Q.a.icon($()),(o=Q.a.marker(a.coords,{icon:i})).addTo(c));var m,u=Object(H.a)(t);try{for(u.s();!(m=u.n()).done;){var p=m.value;i=Q.a.icon(K()),o=Q.a.marker(p.coords,{icon:i}),l.push(o)}}catch(h){u.e(h)}finally{u.f()}for(var d=0,f=l;d<f.length;d++){var _=f[d];_.addTo(c)}r.setState({markers:l,map:c})},r._changeIconsOnHover=function(e,t){var a,r=Object(H.a)(t);try{for(r.s();!(a=r.n()).done;){var n=a.value,i=void 0;i=e&&n._latlng.lat===e.coords[0]&&n._latlng.lng===e.coords[1]?Q.a.icon(K(35,35)):Q.a.icon(K()),n.setIcon(i)}}catch(s){r.e(s)}finally{r.f()}},r.state={map:null,markers:[]},r}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.coords,a=e.items,r=e.offer;r?this._initMap(t,a,r):this._initMap(t,a)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.coords,r=t.offerHover,n=t.items,i=t.offer,s=this.state.markers;e.offer!==i&&(this.state.map.off(),this.state.map.remove(),this._initMap(a,n,i)),e.coords!==a&&(this.state.map.off(),this.state.map.remove(),this._initMap(a,n)),this._changeIconsOnHover(r,s)}},{key:"render",value:function(){var e=this.props.items;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"map"}),s.a.createElement("span",{style:{visibility:"hidden"},defaultValue:e}))}}]),a}(s.a.PureComponent),Ne=function(e){var t=e.isAuthorizationRequired,a=e.currentUser,r=e.onLogoClick;return s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"header__wrapper"},s.a.createElement("div",{className:"header__left"},s.a.createElement(me.a,{to:z+"/",className:"header__logo-link buttonLink",onClick:r},s.a.createElement("img",{className:"header__logo",src:z+"/img/logo.svg",alt:"6 cities logo",width:"81",height:"41"}))),s.a.createElement("nav",{className:"header__nav"},s.a.createElement("ul",{className:"header__nav-list"},s.a.createElement("li",{className:"header__nav-item user"},s.a.createElement("button",{className:"header__nav-link header__nav-link--profile buttonLink"},s.a.createElement("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),t?s.a.createElement("span",{className:"header__login"},"/login"!==window.location.pathname?s.a.createElement(me.a,{to:z+"/login"},"Sign in"):"Sign In"):s.a.createElement("span",{className:"header__user-name user__name"},"/favorites"!==window.location.pathname?s.a.createElement(me.a,{to:z+"/favorites"},a.name):a.name))))))))},be=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).handleClick=function(e){return r.props.onClick(e)},r.handleMouseOver=function(e){return r.setState((function(t){return t.hoverItem!==e?{hoverItem:e}:null}))},r.handleMouseLeave=function(){return r.setState({hoverItem:null})},r.handleCityClick=function(e){return r.props.onCityClick(e)},r.handleSortOffers=function(e){var t=r.state.offers;switch(e){case"Popular":t.sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0}));break;case"Price: low to high":t.sort((function(e,t){return e.price>t.price?1:e.price<t.price?-1:0}));break;case"Price: high to low":t.sort((function(e,t){return e.price<t.price?1:e.price>t.price?-1:0}));break;case"Top rated first":t.sort((function(e,t){return e.rating<t.rating?1:e.rating>t.rating?-1:0}));break;default:return null}r.setState({offers:t})},r.handleBookmarkClick=function(e,t){var a=r.props,n=a.isAuthorizationRequired,i=a.toggleBookmark,s=a.favoriteList;n?window.location.assign(z+"/login"):i(e,s)},r.state={hoverItem:null,offers:[]},r}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.city;document.title="6 cities - ".concat(e)}},{key:"componentDidUpdate",value:function(e){e.city!==this.props.city&&(this.handleSortOffers("Popular"),document.title="6 cities - ".concat(this.props.city))}},{key:"render",value:function(){var e=this.props,t=e.hotels,a=e.city,r=e.currentUser,n=e.isAuthorizationRequired,i=e.reload,c=e.favoriteList,o=Z(t,a),l=t[o].offers,m=t[o].coords;return s.a.createElement("div",{className:"page page--gray page--main"},s.a.createElement(Ne,{isAuthorizationRequired:n,currentUser:r,onLogoClick:i}),s.a.createElement("main",{className:l.length?"page__main page__main--index":"page__main page__main--index page__main--index-empty"},s.a.createElement(Ee,{items:t,city:a,onClick:this.handleCityClick}),s.a.createElement("div",{className:"cities"},l.length?s.a.createElement("div",{className:"cities__places-container container"},s.a.createElement("section",{className:"cities__places places"},s.a.createElement("h2",{className:"visually-hidden"},"Places"),s.a.createElement("b",{className:"places__found"},l.length," places to stay in ",a),s.a.createElement(le,{key:a,onChangeOption:this.handleSortOffers}),s.a.createElement("div",{className:"cities__places-list places__list tabs__content"},s.a.createElement(ge,{city:a,items:l,favoriteList:c,onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,onBookmarkClick:this.handleBookmarkClick}))),s.a.createElement("div",{className:"cities__right-section"},s.a.createElement("section",{className:"cities_map map"},s.a.createElement(ke,{coords:m,items:l,offerHover:this.state.hoverItem})))):s.a.createElement(ye,{city:a}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.cityOffer!==t.offers?Object(ie.a)({},t,{offers:e.cityOffers}):null}}]),a}(s.a.Component),we=Object(n.b)((function(e,t){return Object.assign({},t,{})}),(function(e){return{toggleBookmark:function(t,a){return e(T(t,a))}}}))(be),Oe=function(e){var t=e.review,a=20*t.rating,r=new Date(t.date).toLocaleDateString("en-US",{month:"long",year:"numeric"});return s.a.createElement("li",{className:"reviews__item"},s.a.createElement("div",{className:"reviews__user user"},s.a.createElement("div",{className:"reviews__avatar-wrapper user__avatar-wrapper"},s.a.createElement("img",{className:"reviews__avatar user__avatar",src:t.user.avatar_url,width:"54",height:"54",alt:"Reviews avatar"})),s.a.createElement("span",{className:"reviews__user-name"},t.user.name)),s.a.createElement("div",{className:"reviews__info"},s.a.createElement("div",{className:"reviews__rating rating"},s.a.createElement("div",{className:"reviews__stars rating__stars"},s.a.createElement("span",{style:{width:a+"%"}}),s.a.createElement("span",{className:"visually-hidden"},"Rating"))),s.a.createElement("p",{className:"reviews__text"},t.comment),s.a.createElement("time",{className:"reviews__time",dateTime:t.date},r)))},Ce=function(e){var t=e.reviews;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",{className:"reviews__title"},"Reviews \xb7 ",s.a.createElement("span",{className:"reviews__amount"},t.length)),s.a.createElement("ul",{className:"reviews__list"},t.map((function(e){return s.a.createElement(Oe,{review:e,key:e.id})}))))},Le=function(e){var t=e.items,a=e.city,r=e.favoriteList;return s.a.createElement(ge,{city:a,items:t,favoriteList:r,onClick:function(t){return e.onClick(t)},onMouseOver:function(t){return e.onMouseOver(t)},onMouseLeave:function(t){return e.onMouseLeave(t)},onBookmarkClick:function(t,a){return e.onBookmarkClick(t,a)}})},Re=a(18),Se=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).validateForm=function(){r.setState({disabled:!(r.state.isRatingValid&&r.state.isReviewValid)})},r.validateField=function(e,t){var a=r.state,n=a.isRatingValid,i=a.isReviewValid;switch(e){case"rating":n=t.length>0;break;case"review":i=t.length>=50&&t.length<=200}r.setState({isRatingValid:n,isReviewValid:i},(function(){return r.validateForm()}))},r.handleChange=function(e){var t=e.target,a=t.name,n=t.value;r.setState(Object(Re.a)({},a,n),(function(){return r.validateField(a,n)}))},r.clearForm=function(e){e.target.reset(),r.setState({rating:"",review:"",isRatingValid:!1,isReviewValid:!1,disabled:!0})},r.handleSubmit=function(e){e.preventDefault(),r.clearForm(e)},r.state={rating:"",review:"",isRatingValid:!1,isReviewValid:!1,disabled:!0},r}return Object(_.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{className:"reviews__form form",action:"#",method:"post",onSubmit:this.handleSubmit},s.a.createElement("label",{className:"reviews__label form__label",htmlFor:"review"},"Your review"),s.a.createElement("div",{className:"reviews__rating-form form__rating"},s.a.createElement("input",{className:"form__rating-input visually-hidden",name:"rating",value:"5",id:"5-stars",type:"radio",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"5-stars",className:"reviews__rating-label form__rating-label",title:"perfect"},s.a.createElement("svg",{className:"form__star-image",width:"37",height:"33"},s.a.createElement("use",{xlinkHref:"#icon-star"}))),s.a.createElement("input",{className:"form__rating-input visually-hidden",name:"rating",value:"4",id:"4-stars",type:"radio",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"4-stars",className:"reviews__rating-label form__rating-label",title:"good"},s.a.createElement("svg",{className:"form__star-image",width:"37",height:"33"},s.a.createElement("use",{xlinkHref:"#icon-star"}))),s.a.createElement("input",{className:"form__rating-input visually-hidden",name:"rating",value:"3",id:"3-stars",type:"radio",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"3-stars",className:"reviews__rating-label form__rating-label",title:"not bad"},s.a.createElement("svg",{className:"form__star-image",width:"37",height:"33"},s.a.createElement("use",{xlinkHref:"#icon-star"}))),s.a.createElement("input",{className:"form__rating-input visually-hidden",name:"rating",value:"2",id:"2-stars",type:"radio",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"2-stars",className:"reviews__rating-label form__rating-label",title:"badly"},s.a.createElement("svg",{className:"form__star-image",width:"37",height:"33"},s.a.createElement("use",{xlinkHref:"#icon-star"}))),s.a.createElement("input",{className:"form__rating-input visually-hidden",name:"rating",value:"1",id:"1-star",type:"radio",onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"1-star",className:"reviews__rating-label form__rating-label",title:"terribly"},s.a.createElement("svg",{className:"form__star-image",width:"37",height:"33"},s.a.createElement("use",{xlinkHref:"#icon-star"})))),s.a.createElement("textarea",{className:"reviews__textarea form__textarea",id:"review",placeholder:"Tell how was your stay, what you like and what can be improved",name:"review",value:this.state.textarea,onChange:this.handleChange}),s.a.createElement("div",{className:"reviews__button-wrapper"},s.a.createElement("p",{className:"reviews__help"},"To submit review please make sure to set ",s.a.createElement("span",{className:"reviews__star"},"rating")," and describe your stay with at least ",s.a.createElement("b",{className:"reviews__text-amount"},"50 characters"),"."),s.a.createElement("button",{className:"reviews__submit form__submit button",type:"submit",disabled:this.state.disabled},"Submit")))}}]),a}(s.a.PureComponent),je=function(){return s.a.createElement("main",{className:"page__main page__main--favorites page__main--favorites-empty"},s.a.createElement("div",{className:"page__favorites-container container"},s.a.createElement("section",{className:"favorites favorites--empty"},s.a.createElement("h1",{className:"visually-hidden"},"404 error"),s.a.createElement("div",{className:"favorites__status-wrapper"},s.a.createElement("b",{className:"favorites__status"},"404 error"),s.a.createElement("p",{className:"favorites__status-description"},"Page not found. Go to the ",s.a.createElement(me.a,{to:z+"/"},s.a.createElement("span",{style:{textDecoration:"underline"}},"main"))," page")))))},Ie=(a(58),function(e){var t=e.images;return s.a.createElement("div",{className:"property__gallery-container container"},s.a.createElement("div",{className:"property__gallery"},t.map((function(e,t){return s.a.createElement("div",{className:"property__image-wrapper",key:e},s.a.createElement("img",{className:"property__image",src:e,alt:"studio".concat(t)}))}))))}),xe=function(e){var t=e.offer;return s.a.createElement("ul",{className:"property__features"},s.a.createElement("li",{className:"property__feature property__feature--entire"},"Entire place"),s.a.createElement("li",{className:"property__feature property__feature--bedrooms"},t.bedrooms," Bedrooms"),s.a.createElement("li",{className:"property__feature property__feature--adults"},"Max ",t.max_adults," adults"))},Fe=function(e){var t=e.goods;return s.a.createElement("div",{className:"property__inside"},s.a.createElement("h2",{className:"property__inside-title"},"What's inside"),s.a.createElement("ul",{className:"property__inside-list"},t.map((function(e){return s.a.createElement("li",{className:"property__inside-item",key:e},e)}))))},Me=function(e){var t=e.offer;return s.a.createElement("div",{className:"property__host"},s.a.createElement("h2",{className:"property__host-title"},"Meet the host"),s.a.createElement("div",{className:"property__host-user user"},s.a.createElement("div",{className:"property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"},s.a.createElement("img",{className:"property__avatar user__avatar",src:z+"/"+t.host.avatar_url,width:"74",height:"74",alt:"Host avatar"})),s.a.createElement("span",{className:"property__user-name"},t.host.name),s.a.createElement("span",{className:"property__user-status"},t.host.is_pro?"Pro":"")),s.a.createElement("div",{className:"property__description"},s.a.createElement("p",{className:"property__text"},t.description)))},Te=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).handleClick=function(e){return r.setState({offer:e},(function(){return r.props.onClick(e)}))},r.handleMouseOver=function(e){return r.setState((function(t){return t.hoverItem!==e?{hoverItem:e}:null}))},r.handleMouseLeave=function(){return r.setState({hoverItem:null})},r.isFavorite=function(){var e=r.props,t=e.cityOffer,a=e.favoriteList;return!!a.length&&a.findIndex((function(e){return e.hotelId===t.hotelId}))>=0},r.handleBookmarkClick=function(e,t){var a=r.props,n=a.isAuthorizationRequired,i=a.cityOffer,s=a.toggleBookmark,c=a.favoriteList;n?window.location.assign("".concat(z,"/login")):s(t?e:i,c)},r.state={hoverItem:null,offer:r.props.cityOffer},r}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.cityOffer,a=e.getReviews;document.title="".concat(t.city," - ").concat(t.title),a()}},{key:"componentDidUpdate",value:function(e){e.cityOffer!==this.props.cityOffer&&(window.scrollTo(0,0),document.title="".concat(this.props.cityOffer.city," - ").concat(this.props.cityOffer.title))}},{key:"render",value:function(){var e=this,t=this.props,a=t.hotels,r=t.cityOffers,n=t.city,i=t.currentUser,c=t.isAuthorizationRequired,o=t.favoriteList,l=t.reviews,m=this.state.offer;if(!m)return s.a.createElement(je,null);var u=function(e,t,a){var r=[],n=Q.a.latLng(e.coords);r.push({offer:e,length:0});var i,s=Object(H.a)(t);try{for(s.s();!(i=s.n()).done;){var c=i.value;if(c.id!==e.id){var o=Q.a.latLng(c.coords);r.push({offer:c,length:n.distanceTo(o)})}}}catch(m){s.e(m)}finally{s.f()}r=r.sort((function(e,t){return e.length-t.length}));for(var l=0;l<r.length;l++)r[l]=r[l].offer;return r.slice(1,a+1)}(m,r,3),p=function(e,t){return e[Z(e,t)].coords}(a,n);return s.a.createElement("div",{className:"page"},s.a.createElement(Ne,{isAuthorizationRequired:c,currentUser:i}),s.a.createElement("main",{className:"page__main page__main--property"},s.a.createElement("section",{className:"property"},s.a.createElement(Ie,{images:m.images}),s.a.createElement("div",{className:"property__container container"},s.a.createElement("div",{className:"property__wrapper"},s.a.createElement(fe,{isPremium:m.is_premium,prefix:"property"}),s.a.createElement("div",{className:"property__name-wrapper"},s.a.createElement("h1",{className:"property__name"},m.title),s.a.createElement(de,{isActive:this.isFavorite(),onBookmarkClick:function(t){return e.handleBookmarkClick(m,t)},small:!1})),s.a.createElement(_e,{rating:m.rating,prefix:"property"}),s.a.createElement(xe,{offer:m}),s.a.createElement(he,{price:m.price,prefix:"property"}),s.a.createElement(Fe,{goods:m.goods}),s.a.createElement(Me,{offer:m}),s.a.createElement("section",{className:"property__reviews reviews"},s.a.createElement(Ce,{reviews:l}),c?null:s.a.createElement(Se,{onSubmit:this.submitReviewForm})))),s.a.createElement("section",{className:"property_map map",style:{height:"579px",marginBottom:"50px"}},s.a.createElement(ke,{coords:p,items:u,offerHover:this.state.hoverItem,offer:m}))),s.a.createElement("div",{className:"container"},s.a.createElement("section",{className:"near-places places"},s.a.createElement("h2",{className:"near-places__title"},"Other places in the neighbourhood"),s.a.createElement("div",{className:"near-places__list places__list"},s.a.createElement(Le,{city:n,items:u,favoriteList:o,onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,onBookmarkClick:this.handleBookmarkClick}))))))}}]),a}(s.a.PureComponent),Ae=Object(n.b)((function(e,t){var a=t.match.params.id;return Object.assign({},t,{id:a,city:te(e,a).city,hotels:e.hotels,cityOffer:te(e,a),cityOffers:ae(e,a),favoriteList:e.favoriteList,isAuthorizationRequired:e.isAuthorizationRequired,currentUser:e.currentUser,reviews:e.reviews})}),(function(e,t){return{onClick:function(t){return e(x(t))},toggleBookmark:function(t,a){return e(T(t,a))},getReviews:function(){return e(D(t.match.params.id))}}}))(Te),Ve=function(e){var t=e.city,a=e.onFavoriteCityClick,r=e.prefix;return s.a.createElement("div",{className:G[r.toUpperCase()]},s.a.createElement("div",{className:"locations__item"},s.a.createElement(me.a,{to:z,className:"locations__item-link buttonLink",onClick:function(){return a(t)}},s.a.createElement("span",null,t))))},Ue=(a(59),function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).handleSubmit=function(e){var t=r.props.onSubmit;e.preventDefault(),t({email:r.state.email,password:r.state.password})},r.validateField=function(e,t){var a=r.state.emailValid,n=r.state.passwordValid;switch(e){case"email":a=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);break;case"password":n=t.length>=6&&t.length<=12}r.setState({emailValid:a,passwordValid:n},r.validateForm)},r.validateForm=function(){r.setState({formValid:r.state.emailValid&&r.state.passwordValid})},r.handleChange=function(e){var t=e.target.value,a=e.target.name;r.setState(Object(Re.a)({},a,t),(function(){r.validateField(a,t)}))},r.handleCityClick=function(e){return r.props.onCityClick(e)},r.state={city:"",email:"",password:"",emailValid:!1,passwordValid:!1,formValid:!1},r}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.hotels;document.title="6 cities - sign in",this.setState((function(){return{city:e[(t=e.length,Math.floor(Math.random()*Math.floor(t)))].city};var t}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.hotels,r=t.isAuthRequired,n=t.currentUser;return s.a.createElement("div",{className:"page page--gray page--login"},s.a.createElement(Ne,{isAuthorizationRequired:r,currentUser:n,onLogoClick:function(){return e.handleCityClick(a[0].city)}}),s.a.createElement("main",{className:"page__main page__main--login"},s.a.createElement("div",{className:"page__login-container container"},s.a.createElement("section",{className:"login"},s.a.createElement("h1",{className:"login__title"},"Sign in"),s.a.createElement("form",{className:"login__form form",action:"#",method:"post",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},s.a.createElement("label",{className:"visually-hidden"},"E-mail"),s.a.createElement("input",{className:"login__input form__input ".concat(ne(this.state.email,this.state.emailValid)),type:"email",name:"email",placeholder:"Email",required:"",value:this.state.email,onChange:this.handleChange})),s.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},s.a.createElement("label",{className:"visually-hidden"},"Password"),s.a.createElement("input",{className:"login__input form__input ".concat(ne(this.state.password,this.state.passwordValid)),type:"password",name:"password",placeholder:"Password",required:"",value:this.state.password,onChange:this.handleChange})),s.a.createElement("button",{className:"login__submit form__submit button",type:"submit",disabled:!this.state.formValid},"Sign in"))),s.a.createElement(Ve,{city:this.state.city,onFavoriteCityClick:this.handleCityClick,prefix:"login"}))))}}]),a}(s.a.PureComponent)),Be=function(e){var t=e.item;return s.a.createElement("article",{className:"favorites__card place-card"},s.a.createElement(fe,{isPremium:t.is_premium,prefix:"place-card"}),s.a.createElement("div",{className:"favorites__image-wrapper place-card__image-wrapper"},s.a.createElement(me.a,{to:z+"/offer/"+t.hotelId,className:"buttonLink"},s.a.createElement("img",{className:"place-card__image",src:t.preview_image,width:"150",height:"110",alt:"Place"}))),s.a.createElement("div",{className:"favorites__card-info place-card__info"},s.a.createElement("div",{className:"place-card__price-wrapper"},s.a.createElement(he,{price:t.price,prefix:"place-card"}),s.a.createElement(de,{onBookmarkClick:function(){return e.onBookmarkClick(e.item)},isActive:!0,small:!0})),s.a.createElement(_e,{rating:t.rating,prefix:"place-card"}),s.a.createElement("h2",{className:"place-card__name"},s.a.createElement(me.a,{to:z+"/offer/"+t.hotelId,className:"card__title buttonLink"},t.title)),s.a.createElement("p",{className:"place-card__type"},t.type)))},Pe=function(e){var t=e.favoriteList,a=e.onBookmarkClick,r=e.onFavoriteCityClick,n=function(e){return a(e)},i=function(e){return r(e)};return s.a.createElement("ul",{className:"favorites__list"},t.map((function(e,t){return s.a.createElement("li",{className:"favorites__locations-items",key:e.city+t},s.a.createElement(Ve,{city:e.city,key:e.city+t,onFavoriteCityClick:i,prefix:"favorites"}),s.a.createElement("div",{className:"favorites__places"},e.favorites.map((function(e){return s.a.createElement(Be,{item:e,key:e.hotelId,onBookmarkClick:n})}))))})))},qe=function(e){var t=new Set,a=[],r={city:"",favorites:[]};e.forEach((function(e){return t.add(e.city)}));var n,i=Object(H.a)(t);try{for(i.s();!(n=i.n()).done;){var s,c=n.value,o=Object(H.a)(e);try{for(o.s();!(s=o.n()).done;){var l=s.value;c===l.city&&(r.city=c,r.favorites.push(l))}}catch(m){o.e(m)}finally{o.f()}a.push(r),r={city:"",favorites:[]}}}catch(m){i.e(m)}finally{i.f()}return a},De=Object(n.b)((function(e,t){return Object.assign({},t,{})}),(function(e){return{cityClick:function(t){return e(j(t))},toggleBookmark:function(t,a){return e(T(t,a))}}}))((function(e){var t=e.favoriteList,a=e.toggleBookmark,r=e.cityClick,n=e.isAuthRequired,i=e.currentUser;return document.title="6 cities - favorites",s.a.createElement("div",{className:"page ".concat(t.length?"":"page--favorites-empty")},s.a.createElement(Ne,{isAuthorizationRequired:n,currentUser:i}),t.length?s.a.createElement("main",{className:"page__main page__main--favorites"},s.a.createElement("div",{className:"page__favorites-container container"},s.a.createElement("section",{className:"favorites"},s.a.createElement("h1",{className:"favorites__title"},"Saved listing"),s.a.createElement(Pe,{favoriteList:qe(t),onBookmarkClick:function(e){return a(e,t)},onFavoriteCityClick:function(e){return r(e)}})))):s.a.createElement("main",{className:"page__main page__main--favorites page__main--favorites-empty"},s.a.createElement("div",{className:"page__favorites-container container"},s.a.createElement("section",{className:"favorites favorites--empty"},s.a.createElement("h1",{className:"visually-hidden"},"Favorites (empty)"),s.a.createElement("div",{className:"favorites__status-wrapper"},s.a.createElement("b",{className:"favorites__status"},"Nothing yet saved."),s.a.createElement("p",{className:"favorites__status-description"},"Save properties to narrow down search or plan yor future trips."))))),s.a.createElement("footer",{className:"footer"},s.a.createElement(me.a,{to:z,className:"footer__logo-link",href:"main.html"},s.a.createElement("img",{className:"footer__logo",src:"img/logo.svg",alt:"6 cities logo",width:"64",height:"33"}))))})),He=function(){return s.a.createElement("div",{id:"preloader"},s.a.createElement("div",{id:"loader"}))},ze=a(47),Je=function(e){var t=e.component,a=e.isAuthRequired,r=Object(ze.a)(e,["component","isAuthRequired"]);return s.a.createElement(u.b,Object.assign({},r,{render:function(e){return!1===a?s.a.createElement(t,Object.assign({},r,e)):s.a.createElement(u.a,{to:"/"})}}))},Ge=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(f.a)(this,a),(r=t.call(this,e)).handleReload=function(){r.setState((function(e){return{isHotelsLoaded:!e.isHotelsLoaded}}),(function(){return window.location.reload()}))},r.handleOfferClick=function(e){return r.setState({activeOfferId:e.id})},r.state={activeOfferId:{},isHotelsLoaded:!1},r}return Object(_.a)(a,[{key:"componentDidUpdate",value:function(e){var t,a=this.props,r=a.hotels,n=a.currentUser,i=a.favoriteList;if(e.hotels!==r&&this.setState({isHotelsLoaded:!0}),n&&e.favoriteList!==i){var s,c=[],o={currentUser:n,favoriteList:i},l=(t="favorites",JSON.parse(localStorage.getItem(t)));l?((s=l.filter((function(e){return e.currentUser.email!==n.email}))).push(o),re("favorites",s)):(c.push(o),re("favorites",c))}}},{key:"render",value:function(){var e,t=this.props,a=t.hotels,r=t.city,n=t.currentUser,i=t.isAuthorizationRequired,c=t.favoriteList,o=t.cityClick,l=t.login;return this.state.isHotelsLoaded&&r&&(e=a[Z(a,r)].offers),this.state.isHotelsLoaded&&r?s.a.createElement(u.d,null,s.a.createElement(u.b,{exact:!0,path:J.ROOT},s.a.createElement(we,Object.assign({},this.props,{cityOffers:e,onClick:this.handleOfferClick,onCityClick:o,reload:this.handleReload}))),s.a.createElement(u.b,{exact:!0,path:J.LOGIN},s.a.createElement(Ue,{hotels:a,onSubmit:l,onCityClick:o,currentUser:n,isAuthRequired:i})),s.a.createElement(Je,{exact:!0,path:J.FAVORITES,component:De,isAuthRequired:i,favoriteList:c,currentUser:n}),s.a.createElement(u.b,{path:J.OFFER,render:function(e){return s.a.createElement(Ae,e)}}),s.a.createElement(u.b,{path:J.ERROR,component:je})):s.a.createElement(He,null)}}]),a}(s.a.PureComponent),We=Object(n.b)((function(e,t){return Object.assign({},t,{city:e.city,hotels:e.hotels,currentOffer:e.currentOffer,favoriteList:e.favoriteList,isAuthorizationRequired:e.isAuthorizationRequired,currentUser:e.currentUser})}),(function(e){return{cityClick:function(t){return e(j(t))},onClick:function(t){return e(x(t))},login:function(t){return e(q(t))},setFavorites:function(t){return e(A(t))},setCurrentUser:function(t){return e(M(t))}}}))(Ge),Xe=a(45),Ye=a.n(Xe),Qe=function(e){var t=Ye.a.create({baseURL:"https://es31-server.appspot.com/six-cities",timeout:5e3,withCredentials:!0});return t.interceptors.response.use((function(e){return e}),(function(t){return 403===t.response.status&&e(),t})),t};!function(){var e=Qe((function(){t.dispatch(F(!0))})),t=Object(r.c)(U,Object(m.a)(Object(r.a)(l.a.withExtraArgument(e)),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));t.dispatch(B()).then((function(){var e=t.getState().hotels[0].city;e&&t.dispatch(j(e))})),t.dispatch(P()),o.a.render(s.a.createElement(n.a,{store:t},s.a.createElement(u.c,{history:d},s.a.createElement(We,null))),document.getElementById("root"))}()}},[[48,1,2]]]);
//# sourceMappingURL=main.56a0c430.chunk.js.map