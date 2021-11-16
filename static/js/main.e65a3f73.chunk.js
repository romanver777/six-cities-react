(this["webpackJsonpsix-sities-react"]=this["webpackJsonpsix-sities-react"]||[]).push([[0],{54:function(e,t,a){e.exports=a(68)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(33),n=a(26),i=a(0),c=a.n(i),o=a(38),s=a.n(o),l=a(48),u=a(52),m=a(13),p=a(19),f=Object(p.a)(),d=a(4),h=a(6),_=a(8),v=a(7),g=a(15),E=a(36),y=a(29),k=a(50),b=a(20),O=Object(k.a)({apiKey:"AIzaSyBxAD3KOWDk8CIHIf92sMRDVn1ncpoxA4w",authDomain:"cities-5fbfb.firebaseapp.com",projectId:"cities-5fbfb",storageBucket:"cities-5fbfb.appspot.com",messagingSenderId:"925423531890",appId:"1:925423531890:web:366423e60c1ba0f6a14feb",measurementId:"G-SR29YM1GY2",databaseURL:"https://cities-5fbfb-default-rtdb.europe-west1.firebasedatabase.app/"}),N=(Object(b.c)(O),O),C={city:"",hotels:[],currentOffer:{},favoriteList:[],isAuthorizationRequired:!0,currentUser:{},reviews:[]},w=function(e,t){return t&&t.length?t.findIndex((function(t){return t.hotelId===e.hotelId})):-1},L="SET_CITY",j="SET_HOTELS",I="SET_CURRENT_OFFER",R="REQUIRE_AUTHORIZATION",S="SET_CURRENT_USER",T="ADD_FAVORITE",U="REMOVE_FAVORITE",x="SET_FAVORITES",M="SET_FAVORITE_LIST",A="SET_REVIEWS",F=function(e){return{type:L,payload:e}},B=function(e){return{type:j,payload:e}},D=function(e){return{type:I,payload:e}},V=function(e){return{type:R,payload:e}},P=function(e){return{type:S,payload:e}},q=function(e){return{type:"SET_FAVORITE_LIST",payload:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object.assign({},e,{city:t.payload});case j:return Object.assign({},e,{hotels:t.payload});case I:return Object.assign({},e,{currentOffer:t.payload});case R:return Object.assign({},e,{isAuthorizationRequired:t.payload});case S:return Object.assign({},e,{currentUser:t.payload});case T:return e.currentUser.favoriteList?Object.assign({},e,{currentUser:Object(E.a)({},Object.assign({},e.currentUser,{favoriteList:[].concat(Object(g.a)(e.currentUser.favoriteList),[t.payload])}))}):Object.assign({},e,{currentUser:Object(E.a)({},Object.assign({},e.currentUser,{favoriteList:[t.payload]}))});case U:var a=Object(g.a)(e.favoriteList);return a.splice(t.payload,1),Object.assign({},e,{favoriteList:a});case x:case M:return Object.assign({},e,{favoriteList:t.payload});case A:return Object.assign({},e,{reviews:t.payload});default:return e}},H={loadHotels:function(){return function(e,t){var a=Object(b.d)(Object(b.c)());Object(b.b)(Object(b.a)(a,"hotels/")).then((function(t){t.exists()&&e(B(t.val()))})).then((function(){var a=t().hotels[0].city;a&&e(F(a))})).catch((function(e){console.log(e)}))}},checkAuth:function(){return function(e,t){Object(y.b)().onAuthStateChanged((function(t){t&&e(H.downloadCurrentUserData(t.uid))}))}},login:function(e){return function(t,a){var r=Object(y.b)(N);Object(y.c)(r,y.a).then((function(){return Object(y.d)(r,e.email,e.password)})).then((function(e){return t(H.downloadCurrentUserData(e.user.uid))})).catch((function(e){console.log(e)}))}},downloadCurrentUserData:function(e){return function(t,a){var r=Object(b.d)(Object(b.c)());Object(b.b)(Object(b.a)(r,"users/".concat(e))).then((function(e){e.exists()&&(t(P(e.val())),t(V(!1)))})).then((function(){a().currentUser.favoriteList&&t(q(a().currentUser.favoriteList))})).catch((function(e){console.log(e)}))}},uploadToFavoriteList:function(e){return function(t,a){var r=Object(b.c)(),n=Object(y.b)().currentUser.uid;Object(b.e)(Object(b.d)(r,"users/"+n),{favoriteList:e}).then((function(){t(H.downloadCurrentUserData(n))})).catch((function(e){console.log(e)}))}},toggleFavoriteList:function(e){return function(t,a){var r=a().currentUser.favoriteList,n=w(e,r);return n>-1?(r.splice(n,1),void t(H.uploadToFavoriteList(r))):r?(r.push(e),void t(H.uploadToFavoriteList(r))):void t(H.uploadToFavoriteList([e]))}}},G=a(10),W="six-cities-react/",X={LOGIN:"/login",ROOT:"/",OFFER:"/offer/:id",FAVORITES:"/favorites",ERROR:W+"*"},Y={FAVORITES:"favorites__locations locations locations--current",LOGIN:"locations locations--login locations--current"},J="input_error",K="input_valid",Q=a(21),Z=a.n(Q),$=function(e,t){for(var a=0;a<e.length;a++)if(e[a].city.toLowerCase()===t.toLowerCase())return a},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return{iconUrl:"/img/pin-active.svg",iconSize:[e,t]}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;return{iconUrl:"/img/pin.svg",iconSize:[e,t]}},ae=function(e){var t=[];return e.hotels.forEach((function(e){e.hasOwnProperty("offers")&&(t=[].concat(Object(g.a)(t),Object(g.a)(e.offers)))})),t},re=function(e,t){return ae(e).filter((function(e){return e.hotelId===+t}))[0]},ne=function(e,t){var a=re(e,t).city;return ae(e).filter((function(e){return e.city===a}))},ie=function(e,t){return t?K:e.length>0?J:""},ce=function(e){var t=new Set,a=[];return e.forEach((function(e){return t.add(e.city)})),Object(g.a)(t).map((function(t){return a.push({city:t,favorites:Object(g.a)(e.filter((function(e){return t===e.city})))})})),a},oe=a(27),se=a.n(oe),le=function(e){Object(v.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).handleClickToggle=function(){r.setState((function(e){return{isOpen:!e.isOpen}}))},r.handleClick=function(e){var t=r.props.onChangeOption;document.querySelector(".places__option--active").classList.remove("places__option--active"),r.handleClickToggle(),r.setState({option:e.target.innerHTML}),e.target.classList.add("places__option--active"),t(e.target.innerHTML)},r.state={isOpen:!1,option:"Popular"},r}return Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{className:"places__sorting",action:"#",method:"get"},c.a.createElement("span",{className:"places__sorting-caption"},"Sort by"),c.a.createElement("span",{className:"places__sorting-type",tabIndex:"0",onClick:this.handleClickToggle},this.state.option,c.a.createElement("svg",{className:"places__sorting-arrow",width:"7",height:"4"},c.a.createElement("use",{xlinkHref:"#icon-arrow-select"}))),c.a.createElement("ul",{className:this.state.isOpen?"places__options\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaces__options--custom\n\t\t\t\t \t\t\t\t\t\t\t\t\tplaces__options--opened":"places__options\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaces__options--custom\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaces__options--closed"},c.a.createElement("li",{className:"places__option places__option--active",tabIndex:"0",onClick:this.handleClick},"Popular"),c.a.createElement("li",{className:"places__option",tabIndex:"0",onClick:this.handleClick},"Price: low to high"),c.a.createElement("li",{className:"places__option",tabIndex:"0",onClick:this.handleClick},"Price: high to low"),c.a.createElement("li",{className:"places__option",tabIndex:"0",onClick:this.handleClick},"Top rated first")))}}]),a}(c.a.PureComponent);le.propType={onChangeOption:se.a.func.isRequired};var ue=le,me=a(14),pe={prefix:"property",width:31,height:33},fe={prefix:"place-card",width:18,height:19},de=function(e){var t=e.onBookmarkClick,a=e.isActive,r=e.small,n=r?fe.prefix:pe.prefix,i=a?"".concat(n,"__bookmark-button--active"):"";return c.a.createElement("button",{className:"".concat(n,"__bookmark-button ").concat(i," button"),type:"button",onClick:function(){return t(r)}},c.a.createElement("svg",{className:"".concat(n,"__bookmark-icon"),width:r?fe.width:pe.width,height:r?fe.height:pe.height,style:a?{fill:"#4481c3",stroke:"#4481c3"}:{fill:"none",stroke:"#b8b8b8"}},c.a.createElement("use",{xlinkHref:"#icon-bookmark"})),c.a.createElement("span",{className:"visually-hidden"},"To bookmarks"))},he=function(e){var t=e.isPremium,a=e.prefix;return t?c.a.createElement("div",{className:"".concat(a,"__mark")},c.a.createElement("span",null,"Premium")):""},_e=function(e){var t=e.rating,a=e.prefix,r=100*t/5;return c.a.createElement("div",{className:"".concat(a,"__rating rating")},c.a.createElement("div",{className:"".concat(a,"__stars rating__stars")},c.a.createElement("span",{style:{width:r+"%"}}),c.a.createElement("span",{className:"visually-hidden"},"Rating")),"property"===a?c.a.createElement("span",{className:"".concat(a,"__rating-value rating__value")},t):"")},ve=function(e){var t=e.price,a=e.prefix;return c.a.createElement("div",{className:"".concat(a,"__price")},c.a.createElement("b",{className:"".concat(a,"__price-value")},"\u20ac",t),c.a.createElement("span",{className:"".concat(a,"__price-text")},"place-card"===a?"/":"","\xa0night"))},ge=function(e){var t=e.item,a=e.isFavorite,r=function(t){return e.onClick(t)};return c.a.createElement("article",{className:"cities__place-card place-card",id:t.id,onMouseOver:function(){return a=t,e.onMouseOver(a);var a},onMouseLeave:function(){return e.onMouseLeave()}},c.a.createElement(he,{isPremium:t.is_premium,prefix:"place-card"}),c.a.createElement("div",{className:"cities__image-wrapper place-card__image-wrapper"},c.a.createElement(me.a,{to:"/offer/"+t.hotelId,className:"buttonLink",onClick:function(){return r(t)}},c.a.createElement("img",{className:"place-card__image",src:t.preview_image,width:"260",height:"200",alt:"Place"}))),c.a.createElement("div",{className:"place-card__info"},c.a.createElement("div",{className:"place-card__price-wrapper"},c.a.createElement(ve,{price:t.price,prefix:"place-card"}),c.a.createElement(de,{onBookmarkClick:function(a){return function(t,a){return e.onBookmarkClick(t,a)}(t,a)},isActive:a,small:!0})),c.a.createElement(_e,{rating:t.rating,prefix:"place-card"}),c.a.createElement("h2",{className:"place-card__name"},c.a.createElement(me.a,{to:"/offer/".concat(t.hotelId),className:"card__title buttonLink",onClick:function(){return r(t)}},t.title)),c.a.createElement("p",{className:"place-card__type"},t.type)))},Ee=function(e){Object(v.a)(a,e);var t=Object(_.a)(a);function a(e){var r;Object(d.a)(this,a),(r=t.call(this,e)).handleClick=function(e){return r.props.onClick(e)},r.handleMouseOver=function(e){return r.props.onMouseOver(e)},r.handleMouseLeave=function(e){return r.props.onMouseLeave(e)},r.handleBookmarkClick=function(e,t){return r.props.onBookmarkClick(e,t)},r.isFavorite=function(e,t){if(e)return!!e.filter((function(e){return e.hotelId===t.hotelId})).length};var n=r.props.items.items;return r.state={items:n},r}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.items,r=t.favoriteList;return a.map((function(t){return c.a.createElement(ge,{item:t,key:t.hotelId,isFavorite:e.isFavorite(r,t),onClick:e.handleClick,onMouseOver:e.handleMouseOver,onMouseLeave:e.handleMouseLeave,onBookmarkClick:e.handleBookmarkClick})}))}}]),a}(c.a.Component),ye=function(e){var t=e.items,a=e.city,r=e.onClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"visually-hidden"},"Cities"),c.a.createElement("div",{className:"tabs"},c.a.createElement("section",{className:"locations container"},c.a.createElement("ul",{className:"locations__list tabs__list"},t.map((function(e,t){return c.a.createElement("li",{className:"locations__item",key:t},c.a.createElement(me.a,{to:W+X.ROOT,className:e.city===a?"locations__item-link tabs__item buttonLink tabs__item--active":"locations__item-link tabs__item buttonLink",style:{color:"#000",backgroundColor:"#f5f5f5"},onClick:function(){return r(e.city)},key:t},c.a.createElement("span",null,e.city)))}))))))},ke=function(e){var t=e.city;return c.a.createElement("div",{className:"cities__places-container cities__places-container--empty container"},c.a.createElement("section",{className:"cities__no-places"},c.a.createElement("div",{className:"cities__status-wrapper tabs__content"},c.a.createElement("b",{className:"cities__status"},"No places to stay available"),c.a.createElement("p",{className:"cities__status-description"},"We could not find any property availbale at the moment in ",t))),c.a.createElement("div",{className:"cities__right-section"}))},be=function(e){Object(v.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e))._initMap=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e,i=Z.a.icon(te()),c=12,o=Z.a.map("map",{center:n,zoom:c,zoomControl:!1,marker:!0});o.setView(n,c),Z.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'}).addTo(o);var s,l=[];a&&(i=Z.a.icon(ee()),(s=Z.a.marker(a.coords,{icon:i})).addTo(o));var u,m=Object(G.a)(t);try{for(m.s();!(u=m.n()).done;){var p=u.value;i=Z.a.icon(te()),s=Z.a.marker(p.coords,{icon:i}),l.push(s)}}catch(_){m.e(_)}finally{m.f()}for(var f=0,d=l;f<d.length;f++){var h=d[f];h.addTo(o)}r.setState({markers:l,map:o})},r._changeIconsOnHover=function(e,t){var a,r=Object(G.a)(t);try{for(r.s();!(a=r.n()).done;){var n=a.value,i=void 0;i=e&&n._latlng.lat===e.coords[0]&&n._latlng.lng===e.coords[1]?Z.a.icon(te(35,35)):Z.a.icon(te()),n.setIcon(i)}}catch(c){r.e(c)}finally{r.f()}},r.state={map:null,markers:[]},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.coords,a=e.items,r=e.offer;r?this._initMap(t,a,r):this._initMap(t,a)}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.coords,r=t.offerHover,n=t.items,i=t.offer,c=this.state.markers;e.offer!==i&&(this.state.map.off(),this.state.map.remove(),this._initMap(a,n,i)),e.coords!==a&&(this.state.map.off(),this.state.map.remove(),this._initMap(a,n)),this._changeIconsOnHover(r,c)}},{key:"render",value:function(){var e=this.props.items;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"map"}),c.a.createElement("span",{style:{visibility:"hidden"},defaultValue:e}))}}]),a}(c.a.PureComponent),Oe=function(e){var t=e.isAuthorizationRequired,a=e.currentUser,r=e.onLogoClick;return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header__wrapper"},c.a.createElement("div",{className:"header__left"},c.a.createElement(me.a,{to:W+X.ROOT,className:"header__logo-link buttonLink",onClick:r},c.a.createElement("img",{className:"header__logo",src:"/img/logo.svg",alt:"6 cities logo",width:"81",height:"41"}))),c.a.createElement("nav",{className:"header__nav"},c.a.createElement("ul",{className:"header__nav-list"},c.a.createElement("li",{className:"header__nav-item user"},c.a.createElement("button",{className:"header__nav-link header__nav-link--profile buttonLink"},c.a.createElement("div",{className:"header__avatar-wrapper user__avatar-wrapper"}),a&&!t?c.a.createElement("span",{className:"header__user-name user__name"},"/favorites"!==window.location.pathname?c.a.createElement(me.a,{to:W+"/favorites"},a.name):a.name):c.a.createElement("span",{className:"header__login"},"/login"!==window.location.pathname?c.a.createElement(me.a,{to:W+"/login"},"Sign in"):"Sign In"))))))))},Ne=function(e){Object(v.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).handleClick=function(e){return r.props.onClick(e)},r.handleMouseOver=function(e){return r.setState((function(t){return t.hoverItem!==e?{hoverItem:e}:null}))},r.handleMouseLeave=function(){return r.setState({hoverItem:null})},r.handleCityClick=function(e){return r.props.onCityClick(e)},r.handleSortOffers=function(e){var t=r.state.offers;switch(e){case"Popular":t.sort((function(e,t){return e.id>t.id?1:e.id<t.id?-1:0}));break;case"Price: low to high":t.sort((function(e,t){return e.price>t.price?1:e.price<t.price?-1:0}));break;case"Price: high to low":t.sort((function(e,t){return e.price<t.price?1:e.price>t.price?-1:0}));break;case"Top rated first":t.sort((function(e,t){return e.rating<t.rating?1:e.rating>t.rating?-1:0}));break;default:return null}r.setState({offers:t})},r.handleBookmarkClick=function(e,t){var a=r.props,n=a.isAuthorizationRequired,i=a.toggleBookmark;n?window.location.assign(X.LOGIN):i(e)},r.state={hoverItem:null,offers:[]},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){document.title="6 cities - ".concat(this.props.city)}},{key:"componentDidUpdate",value:function(e){e.city!==this.props.city&&(this.handleSortOffers("Popular"),document.title="6 cities - ".concat(this.props.city))}},{key:"render",value:function(){var e=this.props,t=e.hotels,a=e.city,r=e.cityOffers,n=e.currentUser,i=e.isAuthorizationRequired,o=e.reload,s=e.favoriteList,l=t[$(t,a)].coords;return c.a.createElement("div",{className:"page page--gray page--main"},c.a.createElement(Oe,{isAuthorizationRequired:i,currentUser:n,onLogoClick:o}),c.a.createElement("main",{className:r.length?"page__main page__main--index":"page__main page__main--index page__main--index-empty"},c.a.createElement(ye,{items:t,city:a,onClick:this.handleCityClick}),c.a.createElement("div",{className:"cities"},r.length?c.a.createElement("div",{className:"cities__places-container container"},c.a.createElement("section",{className:"cities__places places"},c.a.createElement("h2",{className:"visually-hidden"},"Places"),c.a.createElement("b",{className:"places__found"},r.length," places to stay in ",a),c.a.createElement(ue,{key:a,onChangeOption:this.handleSortOffers}),c.a.createElement("div",{className:"cities__places-list places__list tabs__content"},c.a.createElement(Ee,{city:a,items:r,favoriteList:s,onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,onBookmarkClick:this.handleBookmarkClick}))),c.a.createElement("div",{className:"cities__right-section"},c.a.createElement("section",{className:"cities_map map"},c.a.createElement(be,{coords:l,items:r,offerHover:this.state.hoverItem})))):c.a.createElement(ke,{city:a}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.cityOffer!==t.offers?Object(E.a)({},t,{offers:e.cityOffers}):null}}]),a}(c.a.Component),Ce=Object(n.b)(null,(function(e){return{toggleBookmark:function(t){return e(H.toggleFavoriteList(t))}}}))(Ne),we=function(e){var t=e.items,a=e.city,r=e.favoriteList;return c.a.createElement(Ee,{city:a,items:t,favoriteList:r,onClick:function(t){return e.onClick(t)},onMouseOver:function(t){return e.onMouseOver(t)},onMouseLeave:function(t){return e.onMouseLeave(t)},onBookmarkClick:function(t,a){return e.onBookmarkClick(t,a)}})},Le=function(){return c.a.createElement("main",{className:"page__main page__main--favorites page__main--favorites-empty"},c.a.createElement("div",{className:"page__favorites-container container"},c.a.createElement("section",{className:"favorites favorites--empty"},c.a.createElement("h1",{className:"visually-hidden"},"404 error"),c.a.createElement("div",{className:"favorites__status-wrapper"},c.a.createElement("b",{className:"favorites__status"},"404 error"),c.a.createElement("p",{className:"favorites__status-description"},"Page not found. Go to the ",c.a.createElement(me.a,{to:W+X.ROOT},c.a.createElement("span",{style:{textDecoration:"underline"}},"main"))," page")))))},je=(a(66),function(e){var t=e.images,a=e.title;return c.a.createElement("div",{className:"property__gallery-container container"},c.a.createElement("div",{className:"property__gallery"},t.map((function(e,t){return c.a.createElement("div",{className:"property__image-wrapper",key:a+t},c.a.createElement("img",{className:"property__image",src:e,alt:"studio".concat(t)}))}))))}),Ie=function(e){var t=e.offer;return c.a.createElement("ul",{className:"property__features"},c.a.createElement("li",{className:"property__feature property__feature--entire"},"Entire place"),c.a.createElement("li",{className:"property__feature property__feature--bedrooms"},t.bedrooms," Bedrooms"),c.a.createElement("li",{className:"property__feature property__feature--adults"},"Max ",t.max_adults," adults"))},Re=function(e){var t=e.goods;return c.a.createElement("div",{className:"property__inside"},c.a.createElement("h2",{className:"property__inside-title"},"What's inside"),c.a.createElement("ul",{className:"property__inside-list"},t.map((function(e){return c.a.createElement("li",{className:"property__inside-item",key:e},e)}))))},Se=function(e){var t=e.offer;return c.a.createElement("div",{className:"property__host"},c.a.createElement("h2",{className:"property__host-title"},"Meet the host"),c.a.createElement("div",{className:"property__host-user user"},c.a.createElement("div",{className:"property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"},c.a.createElement("img",{className:"property__avatar user__avatar",src:W+"/"+t.host.avatar_url,width:"74",height:"74",alt:"Host avatar"})),c.a.createElement("span",{className:"property__user-name"},t.host.name),c.a.createElement("span",{className:"property__user-status"},t.host.is_pro?"Pro":"")),c.a.createElement("div",{className:"property__description"},c.a.createElement("p",{className:"property__text"},t.description)))},Te=function(e){Object(v.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).handleClick=function(e){return r.setState({offer:e},(function(){return r.props.onClick(e)}))},r.handleMouseOver=function(e){return r.setState((function(t){return t.hoverItem!==e?{hoverItem:e}:null}))},r.handleMouseLeave=function(){return r.setState({hoverItem:null})},r.isFavorite=function(){var e=r.props,t=e.cityOffer,a=e.favoriteList;return!!a.length&&a.findIndex((function(e){return e.hotelId===t.hotelId}))>=0},r.handleBookmarkClick=function(e,t){var a=r.props,n=a.isAuthorizationRequired,i=a.cityOffer,c=a.toggleBookmark,o=a.favoriteList;n?window.location.assign(X.LOGIN):c(t?e:i,o)},r.state={hoverItem:null,offer:r.props.cityOffer},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){document.title="".concat(this.props.cityOffer.city," - ").concat(this.props.cityOffer.title)}},{key:"componentDidUpdate",value:function(e){e.cityOffer!==this.props.cityOffer&&(window.scrollTo(0,0),document.title="".concat(this.props.cityOffer.city," - ").concat(this.props.cityOffer.title))}},{key:"render",value:function(){var e=this,t=this.props,a=t.hotels,r=t.cityOffers,n=t.city,i=t.currentUser,o=t.isAuthorizationRequired,s=t.favoriteList,l=this.state.offer;if(!this.props.cityOffer)return c.a.createElement(Le,null);if(!l)return c.a.createElement(Le,null);var u=function(e,t,a){var r=[],n=Z.a.latLng(e.coords);r.push({offer:e,length:0});var i,c=Object(G.a)(t);try{for(c.s();!(i=c.n()).done;){var o=i.value;if(o.id!==e.id){var s=Z.a.latLng(o.coords);r.push({offer:o,length:n.distanceTo(s)})}}}catch(u){c.e(u)}finally{c.f()}r=r.sort((function(e,t){return e.length-t.length}));for(var l=0;l<r.length;l++)r[l]=r[l].offer;return r.slice(1,a+1)}(l,r,3),m=function(e,t){return e[$(e,t)].coords}(a,n);return c.a.createElement("div",{className:"page"},c.a.createElement(Oe,{isAuthorizationRequired:o,currentUser:i}),c.a.createElement("main",{className:"page__main page__main--property"},c.a.createElement("section",{className:"property"},c.a.createElement(je,{title:l.title,images:l.images}),c.a.createElement("div",{className:"property__container container"},c.a.createElement("div",{className:"property__wrapper"},c.a.createElement(he,{isPremium:l.is_premium,prefix:"property"}),c.a.createElement("div",{className:"property__name-wrapper"},c.a.createElement("h1",{className:"property__name"},l.title),c.a.createElement(de,{isActive:this.isFavorite(),onBookmarkClick:function(t){return e.handleBookmarkClick(l,t)},small:!1})),c.a.createElement(_e,{rating:l.rating,prefix:"property"}),c.a.createElement(Ie,{offer:l}),c.a.createElement(ve,{price:l.price,prefix:"property"}),c.a.createElement(Re,{goods:l.goods}),c.a.createElement(Se,{offer:l}))),c.a.createElement("section",{className:"property_map map",style:{height:"579px",marginBottom:"50px"}},c.a.createElement(be,{coords:m,items:u,offerHover:this.state.hoverItem,offer:l}))),c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:"near-places places"},c.a.createElement("h2",{className:"near-places__title"},"Other places in the neighbourhood"),c.a.createElement("div",{className:"near-places__list places__list"},c.a.createElement(we,{city:n,items:u,favoriteList:s,onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,onBookmarkClick:this.handleBookmarkClick}))))))}}]),a}(c.a.PureComponent),Ue=Object(n.b)((function(e,t){var a=t.match.params.id;return re(e,a)?Object.assign({},t,{id:a,city:re(e,a).city,hotels:e.hotels,cityOffer:re(e,a),cityOffers:ne(e,a),favoriteList:e.favoriteList,isAuthorizationRequired:e.isAuthorizationRequired,currentUser:e.currentUser}):Object.assign({},t,{cityOffer:""})}),(function(e,t){return{onClick:function(t){return e(D(t))},toggleBookmark:function(t){return e(H.toggleFavoriteList(t))}}}))(Te),xe=a(3),Me=function(e){var t=e.city,a=e.onFavoriteCityClick,r=e.prefix;return c.a.createElement("div",{className:Y[r.toUpperCase()]},c.a.createElement("div",{className:"locations__item"},c.a.createElement(me.a,{to:W,className:"locations__item-link buttonLink",onClick:function(){return a(t)}},c.a.createElement("span",null,t))))},Ae=(a(67),function(e){Object(v.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).handleSubmit=function(e){var t=r.props.onSubmit;e.preventDefault(),t({email:r.state.email,password:r.state.password})},r.validateField=function(e,t){var a=r.state.emailValid,n=r.state.passwordValid;switch(e){case"email":a=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);break;case"password":n=t.length>=6&&t.length<=12}r.setState({emailValid:a,passwordValid:n},r.validateForm)},r.validateForm=function(){r.setState({formValid:r.state.emailValid&&r.state.passwordValid})},r.handleChange=function(e){var t=e.target.value,a=e.target.name;r.setState(Object(xe.a)({},a,t),(function(){r.validateField(a,t)}))},r.handleCityClick=function(e){return r.props.onCityClick(e)},r.state={city:"",email:"",password:"",emailValid:!1,passwordValid:!1,formValid:!1},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.hotels;document.title="6 cities - sign in",this.setState((function(){return{city:e[(t=e.length,Math.floor(Math.random()*Math.floor(t)))].city};var t}))}},{key:"componentDidUpdate",value:function(e){e.currentUser!==this.props.currentUser&&f.replace("/")}},{key:"render",value:function(){var e=this,t=this.props,a=t.hotels,r=t.isAuthRequired,n=t.currentUser;return c.a.createElement("div",{className:"page page--gray page--login"},c.a.createElement(Oe,{isAuthorizationRequired:r,currentUser:n,onLogoClick:function(){return e.handleCityClick(a[0].city)}}),c.a.createElement("main",{className:"page__main page__main--login"},c.a.createElement("div",{className:"page__login-container container"},c.a.createElement("section",{className:"login"},c.a.createElement("h1",{className:"login__title"},"Sign in"),c.a.createElement("form",{className:"login__form form",action:"#",method:"post",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},c.a.createElement("label",{className:"visually-hidden"},"E-mail"),c.a.createElement("input",{className:"login__input form__input ".concat(ie(this.state.email,this.state.emailValid)),type:"email",name:"email",placeholder:"Email",required:"",value:this.state.email,onChange:this.handleChange})),c.a.createElement("div",{className:"login__input-wrapper form__input-wrapper"},c.a.createElement("label",{className:"visually-hidden"},"Password"),c.a.createElement("input",{className:"login__input form__input ".concat(ie(this.state.password,this.state.passwordValid)),type:"password",name:"password",placeholder:"Password",required:"",value:this.state.password,onChange:this.handleChange})),c.a.createElement("button",{className:"login__submit form__submit button",type:"submit",disabled:!this.state.formValid},"Sign in"))),c.a.createElement(Me,{city:this.state.city,onFavoriteCityClick:this.handleCityClick,prefix:"login"}))))}}]),a}(c.a.PureComponent)),Fe=function(e){var t=e.item;return c.a.createElement("article",{className:"favorites__card place-card"},c.a.createElement(he,{isPremium:t.is_premium,prefix:"place-card"}),c.a.createElement("div",{className:"favorites__image-wrapper place-card__image-wrapper"},c.a.createElement(me.a,{to:"/offer/"+t.hotelId,className:"buttonLink"},c.a.createElement("img",{className:"place-card__image",src:t.preview_image,width:"150",height:"110",alt:"Place"}))),c.a.createElement("div",{className:"favorites__card-info place-card__info"},c.a.createElement("div",{className:"place-card__price-wrapper"},c.a.createElement(ve,{price:t.price,prefix:"place-card"}),c.a.createElement(de,{onBookmarkClick:function(){return e.onBookmarkClick(e.item)},isActive:!0,small:!0})),c.a.createElement(_e,{rating:t.rating,prefix:"place-card"}),c.a.createElement("h2",{className:"place-card__name"},c.a.createElement(me.a,{to:"/offer/"+t.hotelId,className:"card__title buttonLink"},t.title)),c.a.createElement("p",{className:"place-card__type"},t.type)))},Be=function(e){var t=e.favoriteList,a=e.onBookmarkClick,r=e.onFavoriteCityClick,n=function(e){return a(e)},i=function(e){return r(e)};return c.a.createElement("ul",{className:"favorites__list"},t.map((function(e,t){return c.a.createElement("li",{className:"favorites__locations-items",key:e.city+t},c.a.createElement(Me,{city:e.city,key:e.city+t,onFavoriteCityClick:i,prefix:"favorites"}),c.a.createElement("div",{className:"favorites__places"},e.favorites.map((function(e){return c.a.createElement(Fe,{item:e,key:e.hotelId,onBookmarkClick:n})}))))})))},De=Object(n.b)((function(e,t){return Object.assign({},t,{})}),(function(e){return{cityClick:function(t){return e(F(t))},toggleBookmark:function(t){return e(H.toggleFavoriteList(t))}}}))((function(e){var t=e.favoriteList,a=e.toggleBookmark,r=e.cityClick,n=e.isAuthRequired,i=e.currentUser;return document.title="6 cities - favorites",c.a.createElement("div",{className:"page ".concat(t.length?"":"page--favorites-empty")},c.a.createElement(Oe,{isAuthorizationRequired:n,currentUser:i}),t.length?c.a.createElement("main",{className:"page__main page__main--favorites"},c.a.createElement("div",{className:"page__favorites-container container"},c.a.createElement("section",{className:"favorites"},c.a.createElement("h1",{className:"favorites__title"},"Saved listing"),c.a.createElement(Be,{favoriteList:ce(t),onBookmarkClick:function(e){return a(e)},onFavoriteCityClick:function(e){return r(e)}})))):c.a.createElement("main",{className:"page__main page__main--favorites page__main--favorites-empty"},c.a.createElement("div",{className:"page__favorites-container container"},c.a.createElement("section",{className:"favorites favorites--empty"},c.a.createElement("h1",{className:"visually-hidden"},"Favorites (empty)"),c.a.createElement("div",{className:"favorites__status-wrapper"},c.a.createElement("b",{className:"favorites__status"},"Nothing yet saved."),c.a.createElement("p",{className:"favorites__status-description"},"Save properties to narrow down search or plan yor future trips."))))),c.a.createElement("footer",{className:"footer"},c.a.createElement(me.a,{to:W+X.ROOT,className:"footer__logo-link"},c.a.createElement("img",{className:"footer__logo",src:"img/logo.svg",alt:"6 cities logo",width:"64",height:"33"}))))})),Ve=function(){return c.a.createElement("div",{id:"preloader"},c.a.createElement("div",{id:"loader"}))},Pe=a(53),qe=function(e){var t=e.component,a=e.isAuthRequired,r=Object(Pe.a)(e,["component","isAuthRequired"]);return c.a.createElement(m.b,Object.assign({},r,{render:function(e){return!1===a?c.a.createElement(t,Object.assign({},r,e)):c.a.createElement(m.a,{to:"/"})}}))},ze=function(e){Object(v.a)(a,e);var t=Object(_.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).handleReload=function(){r.setState((function(e){return{isHotelsLoaded:!e.isHotelsLoaded}}),(function(){return window.location.reload()}))},r.handleOfferClick=function(e){return r.setState({activeOfferId:e.id})},r.state={activeOfferId:{},isHotelsLoaded:!1},r}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e){e.hotels!==this.props.hotels&&this.setState({isHotelsLoaded:!0})}},{key:"render",value:function(){var e=this.props,t=e.hotels,a=e.city,r=e.currentUser,n=e.isAuthorizationRequired,i=e.favoriteList,o=e.cityClick,s=e.login;return this.state.isHotelsLoaded&&a?c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:X.ROOT},c.a.createElement(Ce,Object.assign({},this.props,{cityOffers:t[$(t,a)].offers||[],onClick:this.handleOfferClick,onCityClick:o,reload:this.handleReload}))),c.a.createElement(m.b,{exact:!0,path:X.LOGIN},c.a.createElement(Ae,{hotels:t,onSubmit:s,onCityClick:o,currentUser:r,isAuthRequired:n})),c.a.createElement(qe,{exact:!0,path:X.FAVORITES,component:De,isAuthRequired:n,favoriteList:i,currentUser:r}),c.a.createElement(m.b,{path:X.OFFER,render:function(e){return c.a.createElement(Ue,e)}}),c.a.createElement(m.b,{path:X.ERROR,component:Le})):c.a.createElement(Ve,null)}}]),a}(c.a.PureComponent),He=Object(n.b)((function(e,t){return Object.assign({},t,{city:e.city,hotels:e.hotels,currentOffer:e.currentOffer,favoriteList:e.favoriteList,isAuthorizationRequired:e.isAuthorizationRequired,currentUser:e.currentUser})}),(function(e){return{cityClick:function(t){return e(F(t))},onClick:function(t){return e(D(t))},login:function(t){return e(H.login(t))},getCurrentUserData:function(t){return e(H.downloadCurrentUserData(t))}}}))(ze);!function(){var e=Object(r.c)(z,Object(u.a)(Object(r.a)(l.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));e.dispatch(H.loadHotels()),e.dispatch(H.checkAuth()),s.a.render(c.a.createElement(n.a,{store:e},c.a.createElement(m.c,{history:f},c.a.createElement(He,null))),document.getElementById("root"))}()}},[[54,1,2]]]);
//# sourceMappingURL=main.e65a3f73.chunk.js.map