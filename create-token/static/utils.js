var a0_0xdb11b3=a0_0xb1ca;(function(_0x5df9aa,_0xd41d81){var _0x397055=a0_0xb1ca,_0x37aea5=_0x5df9aa();while(!![]){try{var _0x19889b=parseInt(_0x397055(0x210))/0x1+parseInt(_0x397055(0x220))/0x2+parseInt(_0x397055(0x1c9))/0x3*(-parseInt(_0x397055(0x229))/0x4)+parseInt(_0x397055(0x227))/0x5*(-parseInt(_0x397055(0x20c))/0x6)+-parseInt(_0x397055(0x251))/0x7+-parseInt(_0x397055(0x224))/0x8+parseInt(_0x397055(0x201))/0x9;if(_0x19889b===_0xd41d81)break;else _0x37aea5['push'](_0x37aea5['shift']());}catch(_0x4becff){_0x37aea5['push'](_0x37aea5['shift']());}}}(a0_0x1d47,0xa4bd7));import{getDeviceType,getNetwork,getPrice,sleep,isSupportedNetwork}from'./misc.js';import{logGaEvent}from'./events.js';import{init,onConnect,onDisconnect}from'./wallet.js';import{setPrice,getTokenType}from'./parameters.js';async function getAccount(){var _0x5353df=a0_0xb1ca;account_address=document[_0x5353df(0x1cb)](_0x5353df(0x1e4)),btnConnectWallet=document[_0x5353df(0x1cb)](_0x5353df(0x241));const _0x1773de=await ethereum[_0x5353df(0x1fc)]({'method':_0x5353df(0x21a)}),_0x30e418=_0x1773de[0x0];console[_0x5353df(0x20d)](_0x5353df(0x1db),_0x30e418),account_address[_0x5353df(0x1cc)]=_0x30e418[_0x5353df(0x239)](0x0,0x5)+_0x5353df(0x1f5)+_0x30e418['substring'](0x26,0x2b),btnConnectWallet['style'][_0x5353df(0x1fd)]='none',Cookies[_0x5353df(0x1e3)](_0x5353df(0x1d6),_0x30e418),ref_link=document[_0x5353df(0x1cb)](_0x5353df(0x1fa)),Cookies['get'](_0x5353df(0x1d6))?ref_link[_0x5353df(0x1cc)]=window['location'][_0x5353df(0x24c)]+_0x5353df(0x1fb)+Cookies['get'](_0x5353df(0x1d6)):ref_link[_0x5353df(0x1cc)]=window[_0x5353df(0x20e)]['hostname']+'?id='+_0x5353df(0x1e5);}$(a0_0xdb11b3(0x1e1))['on'](a0_0xdb11b3(0x233),async()=>{})['on']('change',async function(_0x39917c){var _0x28d3e5=a0_0xdb11b3;console[_0x28d3e5(0x20d)](_0x28d3e5(0x1d8)),logGaEvent(_0x28d3e5(0x1cd)+$(_0x28d3e5(0x22d))[_0x28d3e5(0x1c2)]());if($('.btn-connect')['is'](':visible'))$(_0x28d3e5(0x241))[_0x28d3e5(0x217)](_0x28d3e5(0x235));else{if(typeof provider!==_0x28d3e5(0x203)){var _0x4bc3d3=[0x38,0x61,0x1,0x89,0xa86a,0xfa,0x19,0x3],_0x1d5fad=parseInt($(_0x28d3e5(0x1e1))[_0x28d3e5(0x1d4)]());console['log'](_0x28d3e5(0x1d9)+_0x1d5fad+_0x28d3e5(0x223)+(_0x4bc3d3[_0x28d3e5(0x202)](_0x1d5fad)&&_0x1d5fad!=currentNetworkId)+_0x28d3e5(0x204));if(_0x4bc3d3[_0x28d3e5(0x202)](_0x1d5fad)&&_0x1d5fad!=currentNetworkId){console['log']('change\x20network');if(getDeviceType()=='mobile'){cancelConnectWalletAlert(_0x1d5fad,currentNetworkId);return;}connectNetwork(_0x1d5fad)[_0x28d3e5(0x21d)](async function(_0xb34fb3){var _0x21ecd9=_0x28d3e5;console['log'](_0xb34fb3);var _0x3b6a22=await web3[_0x21ecd9(0x243)][_0x21ecd9(0x24f)]();console['log']('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20previousNetwork:\x20'+currentNetworkId+_0x21ecd9(0x230)+_0x3b6a22+_0x21ecd9(0x1d2)),currentNetworkId==_0x3b6a22?cancelConnectWalletAlert(_0x1d5fad,currentNetworkId):currentNetworkId=_0x3b6a22;})['catch'](async function(_0x4f814f){var _0x124cb3=_0x28d3e5,_0x5d5573=await web3[_0x124cb3(0x243)][_0x124cb3(0x24f)]();console[_0x124cb3(0x20d)](_0x124cb3(0x226)+currentNetworkId+_0x124cb3(0x230)+_0x5d5573+_0x124cb3(0x1d2)),currentNetworkId==_0x5d5573?cancelConnectWalletAlert(_0x1d5fad,currentNetworkId):currentNetworkId=_0x5d5573;});}}}});function cancelConnectWalletAlert(_0x3d07eb,_0xea4569){var _0x65400c=a0_0xdb11b3;$('.network')['val'](_0xea4569)[_0x65400c(0x217)](_0x65400c(0x1ff)),setTimeout(function(){var _0x59d97d=_0x65400c;alert(_0x59d97d(0x213)+$('.network\x20option[value='+_0x3d07eb+']')[_0x59d97d(0x1c2)]()+_0x59d97d(0x1e6));},0x1),logGaEvent(_0x65400c(0x21e));}function setTopNetwork(_0x4dfcf5){var _0x3896df=a0_0xdb11b3;$('.topNetwork')[_0x3896df(0x1c6)]('border-danger'),$(_0x3896df(0x236))[_0x3896df(0x21c)](_0x3896df(0x214)),$(_0x3896df(0x236))['removeClass'](_0x3896df(0x1f6)),$('.topNetwork')['addClass'](_0x3896df(0x23f));switch(parseInt(_0x4dfcf5)){case 0x1:$('.topNetwork')[_0x3896df(0x1ee)]('img')[_0x3896df(0x1f1)](_0x3896df(0x1c1),'/static/media/eth.png'),$(_0x3896df(0x236))[_0x3896df(0x1ee)](_0x3896df(0x249))[_0x3896df(0x1c2)](_0x3896df(0x240));break;case 0x38:$(_0x3896df(0x236))[_0x3896df(0x1ee)]('img')[_0x3896df(0x1f1)](_0x3896df(0x1c1),_0x3896df(0x1f9)),$(_0x3896df(0x236))['find'](_0x3896df(0x249))[_0x3896df(0x1c2)]('BNB\x20Smart\x20Chain');break;case 0x61:$(_0x3896df(0x236))['find']('img')[_0x3896df(0x1f1)]('src',_0x3896df(0x1f9)),$('.topNetwork')['find'](_0x3896df(0x249))['text']('BSC\x20Testnet');break;case 0x89:$(_0x3896df(0x236))['find'](_0x3896df(0x234))[_0x3896df(0x1f1)]('src',_0x3896df(0x1c4)),$('.topNetwork')[_0x3896df(0x1ee)](_0x3896df(0x249))[_0x3896df(0x1c2)](_0x3896df(0x1d1));break;case 0xfa:$(_0x3896df(0x236))[_0x3896df(0x1ee)](_0x3896df(0x234))[_0x3896df(0x1f1)](_0x3896df(0x1c1),_0x3896df(0x252)),$(_0x3896df(0x236))[_0x3896df(0x1ee)](_0x3896df(0x249))[_0x3896df(0x1c2)](_0x3896df(0x207));break;case 0x19:$(_0x3896df(0x236))[_0x3896df(0x1ee)]('img')['prop'](_0x3896df(0x1c1),_0x3896df(0x1d3)),$(_0x3896df(0x236))[_0x3896df(0x1ee)](_0x3896df(0x249))[_0x3896df(0x1c2)](_0x3896df(0x1ce));break;case 0xa86a:$('.topNetwork')[_0x3896df(0x1ee)](_0x3896df(0x234))[_0x3896df(0x1f1)](_0x3896df(0x1c1),_0x3896df(0x22a)),$('.topNetwork')[_0x3896df(0x1ee)](_0x3896df(0x249))[_0x3896df(0x1c2)](_0x3896df(0x1d7));break;default:$(_0x3896df(0x236))[_0x3896df(0x1ee)](_0x3896df(0x234))[_0x3896df(0x1f1)]('src',_0x3896df(0x1f9)),$(_0x3896df(0x236))[_0x3896df(0x1ee)](_0x3896df(0x249))[_0x3896df(0x1c2)](_0x3896df(0x248));break;}}function setTopNetworkWarning(){var _0xba6f6a=a0_0xdb11b3;$(_0xba6f6a(0x236))['find'](_0xba6f6a(0x234))[_0xba6f6a(0x1f1)](_0xba6f6a(0x1c1),_0xba6f6a(0x22b)),$(_0xba6f6a(0x236))[_0xba6f6a(0x1ee)](_0xba6f6a(0x249))[_0xba6f6a(0x1c2)](_0xba6f6a(0x219)),$('.topNetwork')[_0xba6f6a(0x1c6)]('border-info'),$(_0xba6f6a(0x236))[_0xba6f6a(0x21c)](_0xba6f6a(0x228)),$(_0xba6f6a(0x236))[_0xba6f6a(0x1c6)](_0xba6f6a(0x23f)),$(_0xba6f6a(0x236))[_0xba6f6a(0x21c)](_0xba6f6a(0x1f6));}function checkLogin(){var _0x5460af=a0_0xdb11b3;web3[_0x5460af(0x243)][_0x5460af(0x237)](function(_0xd2c21f,_0x50ab58){var _0x248905=_0x5460af;if(_0xd2c21f!=null)console[_0x248905(0x24e)](_0x248905(0x23b)+_0xd2c21f);else{if(_0x50ab58[_0x248905(0x22f)]==0x0)console['log']('User\x20is\x20not\x20logged\x20in\x20to\x20MetaMask');else console['log'](_0x248905(0x1df)),getAccount();}});}export async function connectNetwork(_0x24432b){var _0x295963=a0_0xdb11b3;_0x24432b==0x38&&(console['log'](_0x295963(0x231)),await web3['currentProvider'][_0x295963(0x1fc)]({'method':_0x295963(0x1da),'params':[{'chainId':'0x38','chainName':_0x295963(0x244),'nativeCurrency':{'name':_0x295963(0x22c),'symbol':_0x295963(0x1fe),'decimals':0x12},'rpcUrls':['https://bsc-dataseed.binance.org/'],'blockExplorerUrls':[_0x295963(0x218)]}]})),_0x24432b==0x61&&(console['log'](_0x295963(0x1cf)),await web3[_0x295963(0x200)][_0x295963(0x1fc)]({'method':_0x295963(0x1da),'params':[{'chainId':'0x61','chainName':_0x295963(0x21b),'nativeCurrency':{'name':_0x295963(0x22c),'symbol':_0x295963(0x1fe),'decimals':0x12},'rpcUrls':[_0x295963(0x23a)],'blockExplorerUrls':['https://testnet.bscscan.com']}]})),_0x24432b==0x1&&(console[_0x295963(0x20d)]('Ethereum\x20Mainnet'),await web3[_0x295963(0x200)][_0x295963(0x1fc)]({'method':_0x295963(0x250),'params':[{'chainId':'0x1'}]})),_0x24432b==0x89&&(console[_0x295963(0x20d)](_0x295963(0x1d1)),await web3[_0x295963(0x200)][_0x295963(0x1fc)]({'method':_0x295963(0x1da),'params':[{'chainId':'0x89','chainName':_0x295963(0x1c7),'nativeCurrency':{'name':_0x295963(0x205),'symbol':_0x295963(0x205),'decimals':0x12},'rpcUrls':[_0x295963(0x1ec)],'blockExplorerUrls':['https://polygonscan.com/']}]})),_0x24432b==0xa86a&&(console[_0x295963(0x20d)](_0x295963(0x1e7)),await web3['currentProvider'][_0x295963(0x1fc)]({'method':_0x295963(0x1da),'params':[{'chainId':_0x295963(0x1f2),'chainName':_0x295963(0x1e7),'nativeCurrency':{'name':_0x295963(0x216),'symbol':'AVAX','decimals':0x12},'rpcUrls':[_0x295963(0x253)],'blockExplorerUrls':[_0x295963(0x1e0)]}]})),_0x24432b==0xfa&&(console[_0x295963(0x20d)](_0x295963(0x207)),await web3[_0x295963(0x200)]['request']({'method':_0x295963(0x1da),'params':[{'chainId':_0x295963(0x238),'chainName':_0x295963(0x1e7),'nativeCurrency':{'name':_0x295963(0x1dd),'symbol':_0x295963(0x1dd),'decimals':0x12},'rpcUrls':[_0x295963(0x1c5)],'blockExplorerUrls':['https://ftmscan.com/']}]})),_0x24432b==0x19&&(console[_0x295963(0x20d)](_0x295963(0x1ce)),await web3[_0x295963(0x200)][_0x295963(0x1fc)]({'method':_0x295963(0x1da),'params':[{'chainId':_0x295963(0x1e9),'chainName':_0x295963(0x1ce),'nativeCurrency':{'name':_0x295963(0x1dc),'symbol':_0x295963(0x1dc),'decimals':0x12},'rpcUrls':[_0x295963(0x24b)],'blockExplorerUrls':[_0x295963(0x1ed)]}]})),_0x24432b==0x3&&(console[_0x295963(0x20d)](_0x295963(0x232)),await web3[_0x295963(0x200)][_0x295963(0x1fc)]({'method':_0x295963(0x250),'params':[{'chainId':_0x295963(0x221)}]}));}export function loadRouters(){var _0x4db11b=a0_0xdb11b3;isSupportedNetwork()?setTopNetwork(getNetwork()):setTopNetworkWarning(),$(_0x4db11b(0x222))[_0x4db11b(0x206)](),getNetwork()==0x61?(console[_0x4db11b(0x20d)](_0x4db11b(0x1cf)),$(_0x4db11b(0x1c3))[_0x4db11b(0x1f0)]('static/views/routers/'+_0x4db11b(0x1ef)+_0x4db11b(0x1d5)),setPrice(getPrice(getTokenType()),'BNB'),$('.testnetAlert')['css'](_0x4db11b(0x1fd),_0x4db11b(0x23e))):$(_0x4db11b(0x211))[_0x4db11b(0x23d)](_0x4db11b(0x1fd),_0x4db11b(0x1f7)),getNetwork()==0x38&&(console[_0x4db11b(0x20d)](_0x4db11b(0x231)),$(_0x4db11b(0x1c3))[_0x4db11b(0x1f0)](_0x4db11b(0x1f3)+_0x4db11b(0x1f8)+_0x4db11b(0x1d5)),setPrice(getPrice(getTokenType()),_0x4db11b(0x22c))),(getNetwork()==0x1||getNetwork()==0x3)&&(console[_0x4db11b(0x20d)]('Ethereum\x20Mainnet'),$('#router_container')['load'](_0x4db11b(0x1f3)+_0x4db11b(0x243)+_0x4db11b(0x1d5)),setPrice(getPrice(getTokenType()),'ETH')),getNetwork()==0x89&&(console[_0x4db11b(0x20d)](_0x4db11b(0x1d1)),$(_0x4db11b(0x1c3))['load'](_0x4db11b(0x1f3)+_0x4db11b(0x212)+_0x4db11b(0x1d5)),setPrice(getPrice(getTokenType()),_0x4db11b(0x205))),getNetwork()==0xa86a&&(console[_0x4db11b(0x20d)]('Avalanche\x20Network'),$(_0x4db11b(0x1c3))[_0x4db11b(0x1f0)](_0x4db11b(0x1f3)+_0x4db11b(0x209)+_0x4db11b(0x1d5)),setPrice(getPrice(getTokenType()),_0x4db11b(0x216))),getNetwork()==0xfa&&(console[_0x4db11b(0x20d)](_0x4db11b(0x207)),$('#router_container')['load'](_0x4db11b(0x1f3)+_0x4db11b(0x1e2)+_0x4db11b(0x1d5)),setPrice(getPrice(getTokenType()),_0x4db11b(0x1dd))),getNetwork()==0x19&&(console['log']('Cronos'),$(_0x4db11b(0x1c3))[_0x4db11b(0x1f0)](_0x4db11b(0x1f3)+_0x4db11b(0x1de)+_0x4db11b(0x1d5)),setPrice(getPrice(getTokenType()),_0x4db11b(0x1dc)));}loadRouters();function getNetworkQuery(){var _0x3a46cb=a0_0xdb11b3,_0x4cea0=new URLSearchParams(window[_0x3a46cb(0x20e)]['search']),_0x314ce4=_0x4cea0[_0x3a46cb(0x23c)](_0x3a46cb(0x1eb));return console[_0x3a46cb(0x20d)](_0x314ce4),_0x314ce4;}var networkQuery=getNetworkQuery();console['log'](a0_0xdb11b3(0x1d0),networkQuery),console[a0_0xdb11b3(0x20d)](networkQuery);function a0_0xb1ca(_0x5afef2,_0x35366e){var _0x1d4757=a0_0x1d47();return a0_0xb1ca=function(_0xb1ca90,_0x2fe728){_0xb1ca90=_0xb1ca90-0x1c1;var _0x33a82a=_0x1d4757[_0xb1ca90];return _0x33a82a;},a0_0xb1ca(_0x5afef2,_0x35366e);}networkQuery=='eth'&&($(a0_0xdb11b3(0x1e1))['val'](0x1),loadRouters());networkQuery==a0_0xdb11b3(0x1ca)&&($(a0_0xdb11b3(0x1e1))['val'](0x89),loadRouters());networkQuery==a0_0xdb11b3(0x225)&&($('.network')[a0_0xdb11b3(0x1d4)](0xa86a),loadRouters());networkQuery=='fantom'&&($(a0_0xdb11b3(0x1e1))['val'](0xfa),loadRouters());function a0_0x1d47(){var _0x2ef828=['Smart\x20Chain\x20-\x20Testnet','addClass','then','cancel_networkChange','mobile','2357720ufRKNa','0x3','.error-create','\x0a\x20\x20\x20\x20\x20\x20\x20\x20check:\x20','5383880kxoNog','avax','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20previousNetwork:\x20','171685OpqlbK','border-danger','56oZatrM','/static/media/avax.png','./static/media/warning.png','BNB','.network\x20:selected','\x0a\x20\x20\x20\x20\x20\x20selectedNetwork:\x20','length','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20newNetwork:\x20','BSC','Ropsten','focus','img','click','.topNetwork','getAccounts','0xfa','substring','https://data-seed-prebsc-1-s1.binance.org:8545/','An\x20error\x20occurred:\x20','get','css','block','bg-light','Ethereum','.btn-connect','#btn-disconnect','eth','Binance\x20Smart\x20Chain\x20Mainnet','#network-137','#btn-connect','addEventListener','BNB\x20Smart\x20Chain','span','#network-25','https://evm.cronos.org','hostname','\x0a\x20\x20\x20\x20\x20\x20check:\x20','error','getChainId','wallet_switchEthereumChain','6260751YmttRJ','/static/media/ftm.png','https://api.avax.network/ext/bc/C/rpc','src','text','#router_container','/static/media/polygon.jpg','https://rpc.ankr.com/fantom/','removeClass','Polygon\x20Mainnet','#network-97','162594ZtpcaG','polygon','querySelector','innerHTML','select\x20','Cronos','BSC\x20-\x20Testnet','networkQuery','Matic(Polygon)','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','/static/media/cronos.jpg','val','.html','account','Avalanche','change\x20network','\x0a\x20\x20\x20\x20\x20\x20\x20\x20selectedNetwork:\x20','wallet_addEthereumChain','address:\x20','CRO','FTM','cronos','User\x20is\x20logged\x20in\x20to\x20MetaMask','https://snowtrace.io/','.network','fantom','set','.account_address','change_to_your_eth_address','\x20please\x20do\x20it\x20manually\x20from\x20your\x20wallet\x20menu','Avalanche\x20Network','\x0a\x20\x20\x20\x20\x20\x20','0x19','#network-250','network','https://polygon-rpc.com','https://cronoscan.com/','find','bscTest','load','prop','0xa86a','static/views/routers/','#network-43114','...','bg-warning','none','bsc','/static/media/binance.png','.ref_link','?id=','request','display','bnb','change','currentProvider','20957823UXSloc','includes','undefined','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','MATIC','hide','Fantom\x20Opera','#network-1','avalanche','cachedProvider','catch','162bTPDTR','log','location','modal','420517BmuOTn','.testnetAlert','matic','To\x20switch\x20to\x20','border-info','#networkModal','AVAX','trigger','https://bscscan.com','Switch\x20Network','eth_requestAccounts'];a0_0x1d47=function(){return _0x2ef828;};return a0_0x1d47();}networkQuery=='cronos'&&($(a0_0xdb11b3(0x1e1))[a0_0xdb11b3(0x1d4)](0x19),loadRouters());window['addEventListener'](a0_0xdb11b3(0x1f0),async()=>{var _0x1889a3=a0_0xdb11b3;init(),document['querySelector'](_0x1889a3(0x246))[_0x1889a3(0x247)](_0x1889a3(0x235),function(){onConnect(loadRouters);}),document[_0x1889a3(0x1cb)](_0x1889a3(0x242))[_0x1889a3(0x247)](_0x1889a3(0x235),function(){onDisconnect();}),web3Modal['cachedProvider']!=''&&typeof web3Modal[_0x1889a3(0x20a)]!==undefined&&onConnect(loadRouters);}),$(a0_0xdb11b3(0x208))['on']('click',()=>{var _0x178313=a0_0xdb11b3;$('#networkModal')[_0x178313(0x20f)]('hide'),selectNetwork(0x1);}),$('#network-56')['on'](a0_0xdb11b3(0x235),()=>{var _0x184344=a0_0xdb11b3;$('#networkModal')['modal'](_0x184344(0x206)),selectNetwork(0x38);}),$(a0_0xdb11b3(0x1c8))['on'](a0_0xdb11b3(0x235),()=>{var _0x25174f=a0_0xdb11b3;$('#networkModal')[_0x25174f(0x20f)](_0x25174f(0x206)),selectNetwork(0x61);}),$(a0_0xdb11b3(0x245))['on'](a0_0xdb11b3(0x235),()=>{var _0x548af9=a0_0xdb11b3;$('#networkModal')[_0x548af9(0x20f)](_0x548af9(0x206)),selectNetwork(0x89);}),$(a0_0xdb11b3(0x1ea))['on']('click',()=>{var _0x1b38f4=a0_0xdb11b3;$(_0x1b38f4(0x215))['modal'](_0x1b38f4(0x206)),selectNetwork(0xfa);}),$(a0_0xdb11b3(0x1f4))['on'](a0_0xdb11b3(0x235),()=>{var _0x102def=a0_0xdb11b3;$(_0x102def(0x215))[_0x102def(0x20f)](_0x102def(0x206)),selectNetwork(0xa86a);}),$(a0_0xdb11b3(0x24a))['on'](a0_0xdb11b3(0x235),()=>{var _0x46e90d=a0_0xdb11b3;$(_0x46e90d(0x215))[_0x46e90d(0x20f)](_0x46e90d(0x206)),selectNetwork(0x19);});function selectNetwork(_0x470a94){var _0x2cd3a9=a0_0xdb11b3;console['log']('change\x20network'),logGaEvent(_0x2cd3a9(0x1cd)+$('.network\x20:selected')[_0x2cd3a9(0x1c2)]());if($(_0x2cd3a9(0x241))['is'](':visible'))$(_0x2cd3a9(0x241))[_0x2cd3a9(0x217)]('click');else{if(typeof provider!==_0x2cd3a9(0x203)){var _0x253beb=[0x38,0x61,0x1,0x89,0xa86a,0xfa,0x19,0x3],_0x3ac687=_0x470a94;console[_0x2cd3a9(0x20d)](_0x2cd3a9(0x22e)+_0x3ac687+_0x2cd3a9(0x24d)+(_0x253beb['includes'](_0x3ac687)&&_0x3ac687!=currentNetworkId)+_0x2cd3a9(0x1e8));if(_0x253beb['includes'](_0x3ac687)&&_0x3ac687!=currentNetworkId){console[_0x2cd3a9(0x20d)](_0x2cd3a9(0x1d8));if(getDeviceType()==_0x2cd3a9(0x21f)){cancelConnectWalletAlert(_0x3ac687,currentNetworkId);return;}connectNetwork(_0x3ac687)['then'](async function(_0x3a4c68){var _0x551df0=_0x2cd3a9;console[_0x551df0(0x20d)](_0x3a4c68);var _0x4b1969=await web3[_0x551df0(0x243)][_0x551df0(0x24f)]();currentNetworkId==_0x4b1969?cancelConnectWalletAlert(_0x3ac687,currentNetworkId):currentNetworkId=_0x4b1969;})[_0x2cd3a9(0x20b)](async function(_0x44e09a){var _0x1f760d=_0x2cd3a9,_0x1aea6d=await web3[_0x1f760d(0x243)]['getChainId']();currentNetworkId==_0x1aea6d?cancelConnectWalletAlert(_0x3ac687,currentNetworkId):currentNetworkId=_0x1aea6d;});}}}}