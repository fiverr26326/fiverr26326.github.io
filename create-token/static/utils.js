function a0_0x450a(){var _0x44ae06=['catch','Ethereum','bg-light','Enter\x20marketing\x20wallet','#networkModal','Switch\x20Network','.error-create','customizedToken','location','0x38','log','static/views/routers/','CRO','?id=','/static/media/doge.png','486147BHFDVc','show','Ropsten','FTM','ETH','39VEoYSC','modal','error','border-danger','BSC\x20-\x20Testnet','https://rpc.ankr.com/fantom/','DogeChain\x20Testnet','val','#btn-connect','https://explorer.dogechain.dog','1288YXSfGQ','span','load','.ref_link','Fantom\x20Opera','\x0a\x20\x20\x20\x20\x20\x20check:\x20','addEventListener','#network-2000','Ethereum\x20Mainnet','prepend','change\x20network','src','wallet_switchEthereumChain','marketingtax','prop','dynamic','cancel_networkChange','To\x20switch\x20to\x20','networkQuery','length','Binance\x20Smart\x20Chain\x20Mainnet','.token_type','change_to_your_eth_address','4190329cgVaxk','Cronos','/static/media/binance.png','BSC\x20Testnet','img','cachedProvider','request','813016aFhhOv','find','querySelector','https://testnet.bscscan.com','MATIC','#network-1','\x20please\x20do\x20it\x20manually\x20from\x20your\x20wallet\x20menu','User\x20is\x20not\x20logged\x20in\x20to\x20MetaMask','eth_requestAccounts','https://polygon-rpc.com','search','520UawhNR','#network-43114','.testnetAlert','0xfa','/static/media/eth.png','selected','undefined','#token_container','DogeChain','matic','Matic(Polygon)','0x7d0','/static/media/cronos.jpg',':visible','4dfrqbX','set','BNB\x20Smart\x20Chain','static/views/','display','.network','.token_type\x20option[value=','account','/static/media/avax.png','https://snowtrace.io/','eth','includes','.network\x20:selected','#router_container','https://evm.cronos.org','\x0a\x20\x20\x20\x20\x20\x20\x20\x20','.actionGroup','https://bsc-dataseed.binance.org/','#tag_popular','wDOGE','trigger','getChainId','text','form','bnb','currentProvider','36185mXJNvp','.network\x20option[value=','/static/media/polygon.jpg','select\x20','https://rpc01-sg.dogechain.dog','change','innerHTML','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20newNetwork:\x20','cronos','<span\x20class=\x22spinner-grow\x20spinner-grow-sm\x22\x20role=\x22status\x22\x20aria-hidden=\x22true\x22\x20style=\x22width:\x2012px;\x20height:\x2012px;\x20margin-right:\x205px\x22></span>','138WBhjTo','BSC','\x0a\x20\x20\x20\x20\x20\x20selectedNetwork:\x20','#btn-disconnect','https://data-seed-prebsc-1-s1.binance.org:8545/','0x61','border-info','Avalanche\x20Network','fantom','css','#network-137','1QYXjQk','BNB','remove','doge','0x3','.html','block','/static/media/ftm.png','bg-warning','removeClass','getAccounts','https://api.avax.network/ext/bc/C/rpc','AVAX','addClass','https://ftmscan.com/','#network-97','#tag_new','\x0a\x20\x20\x20\x20\x20\x20\x20\x20check:\x20','substring','#tag_hot','then','hide','4399464oxDiqS','mobile','standard','.btn-connect','...','get','.topNetwork','User\x20is\x20logged\x20in\x20to\x20MetaMask','https://explorer-testnet.dogechain.dog','focus','Smart\x20Chain\x20-\x20Testnet','click','validate','20718ggxVZk','#network-25','hostname','16023BxdJJu','wallet_addEthereumChain','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20previousNetwork:\x20','0x19','none','.select_router'];a0_0x450a=function(){return _0x44ae06;};return a0_0x450a();}var a0_0x57b42b=a0_0x51d4;(function(_0x2b390d,_0x4e41d0){var _0x2b7b73=a0_0x51d4,_0x1b3ce2=_0x2b390d();while(!![]){try{var _0xf8555f=parseInt(_0x2b7b73(0x16e))/0x1*(-parseInt(_0x2b7b73(0x1d6))/0x2)+-parseInt(_0x2b7b73(0x1a9))/0x3*(parseInt(_0x2b7b73(0x1ef))/0x4)+parseInt(_0x2b7b73(0x159))/0x5*(-parseInt(_0x2b7b73(0x163))/0x6)+-parseInt(_0x2b7b73(0x194))/0x7*(-parseInt(_0x2b7b73(0x1b8))/0x8)+parseInt(_0x2b7b73(0x191))/0x9*(-parseInt(_0x2b7b73(0x1e1))/0xa)+-parseInt(_0x2b7b73(0x1cf))/0xb+parseInt(_0x2b7b73(0x184))/0xc*(parseInt(_0x2b7b73(0x1ae))/0xd);if(_0xf8555f===_0x4e41d0)break;else _0x1b3ce2['push'](_0x1b3ce2['shift']());}catch(_0x1c1207){_0x1b3ce2['push'](_0x1b3ce2['shift']());}}}(a0_0x450a,0x38d28));import{getDeviceType,getNetwork,getPrice,sleep,isSupportedNetwork,getSupportedNetworks}from'./misc.js';import{logGaEvent}from'./events.js';import{init,onConnect,onDisconnect}from'./wallet.js';import{setPrice,getTokenType}from'./parameters.js';async function getAccount(){var _0x546e97=a0_0x51d4;account_address=document['querySelector']('.account_address'),btnConnectWallet=document['querySelector'](_0x546e97(0x187));const _0x2f22d4=await ethereum['request']({'method':_0x546e97(0x1de)}),_0x385af4=_0x2f22d4[0x0];console[_0x546e97(0x1a4)]('address:\x20',_0x385af4),account_address[_0x546e97(0x15f)]=_0x385af4[_0x546e97(0x180)](0x0,0x5)+_0x546e97(0x188)+_0x385af4[_0x546e97(0x180)](0x26,0x2b),btnConnectWallet['style'][_0x546e97(0x1f3)]=_0x546e97(0x198),Cookies[_0x546e97(0x1f0)](_0x546e97(0x1f6),_0x385af4),ref_link=document[_0x546e97(0x1d8)](_0x546e97(0x1bb)),Cookies[_0x546e97(0x189)](_0x546e97(0x1f6))?ref_link[_0x546e97(0x15f)]=window[_0x546e97(0x1a2)][_0x546e97(0x193)]+'?id='+Cookies[_0x546e97(0x189)](_0x546e97(0x1f6)):ref_link[_0x546e97(0x15f)]=window[_0x546e97(0x1a2)][_0x546e97(0x193)]+_0x546e97(0x1a7)+_0x546e97(0x1ce);}$(a0_0x57b42b(0x1f4))['on'](a0_0x57b42b(0x18d),async()=>{})['on'](a0_0x57b42b(0x15e),async function(_0x5b6f63){var _0x5ed8a4=a0_0x57b42b;console[_0x5ed8a4(0x1a4)](_0x5ed8a4(0x1c2)),logGaEvent('select\x20'+$(_0x5ed8a4(0x1fb))['text']());if($(_0x5ed8a4(0x187))['is'](_0x5ed8a4(0x1ee)))$(_0x5ed8a4(0x187))[_0x5ed8a4(0x153)]('click');else{if(typeof provider!==_0x5ed8a4(0x1e7)){var _0x2c5979=getSupportedNetworks(),_0x29866e=parseInt($(_0x5ed8a4(0x1f4))['val']());console[_0x5ed8a4(0x1a4)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20selectedNetwork:\x20'+_0x29866e+_0x5ed8a4(0x17f)+(_0x2c5979[_0x5ed8a4(0x1fa)](_0x29866e)&&_0x29866e!=currentNetworkId)+_0x5ed8a4(0x1fe));if(_0x2c5979[_0x5ed8a4(0x1fa)](_0x29866e)&&_0x29866e!=currentNetworkId){console[_0x5ed8a4(0x1a4)]('change\x20network');if(getDeviceType()==_0x5ed8a4(0x185)){cancelConnectWalletAlert(_0x29866e,currentNetworkId);return;}connectNetwork(_0x29866e)[_0x5ed8a4(0x182)](async function(_0x32a034){var _0x38f80b=_0x5ed8a4;console[_0x38f80b(0x1a4)](_0x32a034);var _0x58007e=await web3[_0x38f80b(0x1f9)][_0x38f80b(0x154)]();console[_0x38f80b(0x1a4)](_0x38f80b(0x196)+currentNetworkId+_0x38f80b(0x160)+_0x58007e+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),currentNetworkId==_0x58007e?cancelConnectWalletAlert(_0x29866e,currentNetworkId):currentNetworkId=_0x58007e;})['catch'](async function(_0x4e406b){var _0x100a43=_0x5ed8a4,_0x13fb0f=await web3[_0x100a43(0x1f9)][_0x100a43(0x154)]();console[_0x100a43(0x1a4)](_0x100a43(0x196)+currentNetworkId+_0x100a43(0x160)+_0x13fb0f+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),currentNetworkId==_0x13fb0f?cancelConnectWalletAlert(_0x29866e,currentNetworkId):currentNetworkId=_0x13fb0f;});}}}});function cancelConnectWalletAlert(_0x53ce68,_0x5e6c09){var _0x190a0d=a0_0x57b42b;$(_0x190a0d(0x1f4))[_0x190a0d(0x1b5)](_0x5e6c09)['trigger'](_0x190a0d(0x15e)),setTimeout(function(){var _0x19b906=_0x190a0d;alert(_0x19b906(0x1c9)+$(_0x19b906(0x15a)+_0x53ce68+']')[_0x19b906(0x155)]()+_0x19b906(0x1dc));},0x1),logGaEvent(_0x190a0d(0x1c8));}function setTopNetwork(_0x13d7a7){var _0x2055a2=a0_0x57b42b;$(_0x2055a2(0x18a))[_0x2055a2(0x177)](_0x2055a2(0x1b1)),$(_0x2055a2(0x18a))[_0x2055a2(0x17b)](_0x2055a2(0x169)),$(_0x2055a2(0x18a))[_0x2055a2(0x177)](_0x2055a2(0x176)),$('.topNetwork')[_0x2055a2(0x17b)](_0x2055a2(0x19c));switch(parseInt(_0x13d7a7)){case 0x1:$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1d3))[_0x2055a2(0x1c6)]('src',_0x2055a2(0x1e5)),$('.topNetwork')[_0x2055a2(0x1d7)](_0x2055a2(0x1b9))[_0x2055a2(0x155)](_0x2055a2(0x19b));break;case 0x38:$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1d3))[_0x2055a2(0x1c6)](_0x2055a2(0x1c3),_0x2055a2(0x1d1)),$('.topNetwork')['find'](_0x2055a2(0x1b9))[_0x2055a2(0x155)](_0x2055a2(0x1f1));break;case 0x61:$('.topNetwork')['find'](_0x2055a2(0x1d3))[_0x2055a2(0x1c6)]('src','/static/media/binance.png'),$(_0x2055a2(0x18a))['find'](_0x2055a2(0x1b9))[_0x2055a2(0x155)](_0x2055a2(0x1d2));break;case 0x89:$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1d3))[_0x2055a2(0x1c6)](_0x2055a2(0x1c3),_0x2055a2(0x15b)),$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)]('span')[_0x2055a2(0x155)]('Matic(Polygon)');break;case 0xfa:$('.topNetwork')[_0x2055a2(0x1d7)]('img')['prop'](_0x2055a2(0x1c3),_0x2055a2(0x175)),$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1b9))[_0x2055a2(0x155)](_0x2055a2(0x1bc));break;case 0x19:$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1d3))[_0x2055a2(0x1c6)](_0x2055a2(0x1c3),_0x2055a2(0x1ed)),$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)]('span')['text'](_0x2055a2(0x1d0));break;case 0xa86a:$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1d3))[_0x2055a2(0x1c6)](_0x2055a2(0x1c3),_0x2055a2(0x1f7)),$('.topNetwork')[_0x2055a2(0x1d7)](_0x2055a2(0x1b9))[_0x2055a2(0x155)]('Avalanche');break;case 0x7d0:$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)]('img')[_0x2055a2(0x1c6)](_0x2055a2(0x1c3),_0x2055a2(0x1a8)),$('.topNetwork')[_0x2055a2(0x1d7)](_0x2055a2(0x1b9))[_0x2055a2(0x155)]('DogeChain');break;default:$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1d3))[_0x2055a2(0x1c6)]('src',_0x2055a2(0x1d1)),$(_0x2055a2(0x18a))[_0x2055a2(0x1d7)](_0x2055a2(0x1b9))[_0x2055a2(0x155)]('BNB\x20Smart\x20Chain');break;}}function setTopNetworkWarning(){var _0x503e2c=a0_0x57b42b;$('.topNetwork')[_0x503e2c(0x1d7)](_0x503e2c(0x1d3))[_0x503e2c(0x1c6)](_0x503e2c(0x1c3),'./static/media/warning.png'),$(_0x503e2c(0x18a))['find'](_0x503e2c(0x1b9))[_0x503e2c(0x155)](_0x503e2c(0x19f)),$(_0x503e2c(0x18a))[_0x503e2c(0x177)](_0x503e2c(0x169)),$(_0x503e2c(0x18a))[_0x503e2c(0x17b)](_0x503e2c(0x1b1)),$(_0x503e2c(0x18a))['removeClass'](_0x503e2c(0x19c)),$(_0x503e2c(0x18a))[_0x503e2c(0x17b)](_0x503e2c(0x176));}function checkLogin(){var _0x5c6ce0=a0_0x57b42b;web3[_0x5c6ce0(0x1f9)][_0x5c6ce0(0x178)](function(_0x4c3eba,_0x4fbb0e){var _0x1ace62=_0x5c6ce0;if(_0x4c3eba!=null)console[_0x1ace62(0x1b0)]('An\x20error\x20occurred:\x20'+_0x4c3eba);else{if(_0x4fbb0e[_0x1ace62(0x1cb)]==0x0)console[_0x1ace62(0x1a4)](_0x1ace62(0x1dd));else console[_0x1ace62(0x1a4)](_0x1ace62(0x18b)),getAccount();}});}export async function connectNetwork(_0x3ae9a7){var _0x5e7d94=a0_0x57b42b;_0x3ae9a7==0x38&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x164)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':_0x5e7d94(0x195),'params':[{'chainId':_0x5e7d94(0x1a3),'chainName':_0x5e7d94(0x1cc),'nativeCurrency':{'name':_0x5e7d94(0x16f),'symbol':_0x5e7d94(0x157),'decimals':0x12},'rpcUrls':[_0x5e7d94(0x150)],'blockExplorerUrls':['https://bscscan.com']}]})),_0x3ae9a7==0x61&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x1b2)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':_0x5e7d94(0x195),'params':[{'chainId':_0x5e7d94(0x168),'chainName':_0x5e7d94(0x18e),'nativeCurrency':{'name':_0x5e7d94(0x16f),'symbol':'bnb','decimals':0x12},'rpcUrls':[_0x5e7d94(0x167)],'blockExplorerUrls':[_0x5e7d94(0x1d9)]}]})),_0x3ae9a7==0x1&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x1c0)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':_0x5e7d94(0x1c4),'params':[{'chainId':'0x1'}]})),_0x3ae9a7==0x89&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x1eb)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':_0x5e7d94(0x195),'params':[{'chainId':'0x89','chainName':'Polygon\x20Mainnet','nativeCurrency':{'name':_0x5e7d94(0x1da),'symbol':'MATIC','decimals':0x12},'rpcUrls':[_0x5e7d94(0x1df)],'blockExplorerUrls':['https://polygonscan.com/']}]})),_0x3ae9a7==0xa86a&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x16a)),await web3[_0x5e7d94(0x158)]['request']({'method':_0x5e7d94(0x195),'params':[{'chainId':'0xa86a','chainName':_0x5e7d94(0x16a),'nativeCurrency':{'name':'AVAX','symbol':_0x5e7d94(0x17a),'decimals':0x12},'rpcUrls':[_0x5e7d94(0x179)],'blockExplorerUrls':[_0x5e7d94(0x1f8)]}]})),_0x3ae9a7==0xfa&&(console['log']('Fantom\x20Opera'),await web3[_0x5e7d94(0x158)]['request']({'method':'wallet_addEthereumChain','params':[{'chainId':_0x5e7d94(0x1e4),'chainName':_0x5e7d94(0x16a),'nativeCurrency':{'name':'FTM','symbol':'FTM','decimals':0x12},'rpcUrls':[_0x5e7d94(0x1b3)],'blockExplorerUrls':[_0x5e7d94(0x17c)]}]})),_0x3ae9a7==0x19&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x1d0)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':_0x5e7d94(0x195),'params':[{'chainId':_0x5e7d94(0x197),'chainName':'Cronos','nativeCurrency':{'name':_0x5e7d94(0x1a6),'symbol':_0x5e7d94(0x1a6),'decimals':0x12},'rpcUrls':[_0x5e7d94(0x1fd)],'blockExplorerUrls':['https://cronoscan.com/']}]})),_0x3ae9a7==0x3&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x1ab)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':_0x5e7d94(0x1c4),'params':[{'chainId':_0x5e7d94(0x172)}]})),_0x3ae9a7==0x7d0&&(console[_0x5e7d94(0x1a4)](_0x5e7d94(0x1e9)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':'wallet_addEthereumChain','params':[{'chainId':_0x5e7d94(0x1ec),'chainName':_0x5e7d94(0x1e9),'nativeCurrency':{'name':'wDOGE','symbol':_0x5e7d94(0x152),'decimals':0x12},'rpcUrls':[_0x5e7d94(0x15d)],'blockExplorerUrls':[_0x5e7d94(0x1b7)]}]})),_0x3ae9a7==0x238&&(console['log'](_0x5e7d94(0x1b4)),await web3[_0x5e7d94(0x158)][_0x5e7d94(0x1d5)]({'method':_0x5e7d94(0x195),'params':[{'chainId':'0x238','chainName':_0x5e7d94(0x1b4),'nativeCurrency':{'name':_0x5e7d94(0x152),'symbol':'wDOGE','decimals':0x12},'rpcUrls':['https://rpc-testnet.dogechain.dog'],'blockExplorerUrls':[_0x5e7d94(0x18c)]}]}));}export function loadRouters(){var _0xb2b1d9=a0_0x57b42b;isSupportedNetwork()?setTopNetwork(getNetwork()):setTopNetworkWarning(),$(_0xb2b1d9(0x1a0))['hide'](),getNetwork()==0x61?(console[_0xb2b1d9(0x1a4)](_0xb2b1d9(0x1b2)),$(_0xb2b1d9(0x1fc))['load']('static/views/routers/'+'bscTest'+_0xb2b1d9(0x173)),setPrice(getPrice(getTokenType()),_0xb2b1d9(0x16f)),$(_0xb2b1d9(0x1e3))[_0xb2b1d9(0x16c)](_0xb2b1d9(0x1f3),_0xb2b1d9(0x174))):$(_0xb2b1d9(0x1e3))[_0xb2b1d9(0x16c)](_0xb2b1d9(0x1f3),_0xb2b1d9(0x198)),getNetwork()==0x38&&(console[_0xb2b1d9(0x1a4)](_0xb2b1d9(0x164)),$('#router_container')[_0xb2b1d9(0x1ba)](_0xb2b1d9(0x1a5)+'bsc'+'.html'),setPrice(getPrice(getTokenType()),'BNB')),(getNetwork()==0x1||getNetwork()==0x3)&&(console[_0xb2b1d9(0x1a4)](_0xb2b1d9(0x1c0)),$(_0xb2b1d9(0x1fc))[_0xb2b1d9(0x1ba)](_0xb2b1d9(0x1a5)+_0xb2b1d9(0x1f9)+'.html'),setPrice(getPrice(getTokenType()),_0xb2b1d9(0x1ad))),getNetwork()==0x89&&(console[_0xb2b1d9(0x1a4)]('Matic(Polygon)'),$(_0xb2b1d9(0x1fc))[_0xb2b1d9(0x1ba)](_0xb2b1d9(0x1a5)+_0xb2b1d9(0x1ea)+'.html'),setPrice(getPrice(getTokenType()),_0xb2b1d9(0x1da))),getNetwork()==0xa86a&&(console[_0xb2b1d9(0x1a4)](_0xb2b1d9(0x16a)),$(_0xb2b1d9(0x1fc))[_0xb2b1d9(0x1ba)](_0xb2b1d9(0x1a5)+'avalanche'+'.html'),setPrice(getPrice(getTokenType()),_0xb2b1d9(0x17a))),getNetwork()==0xfa&&(console[_0xb2b1d9(0x1a4)](_0xb2b1d9(0x1bc)),$(_0xb2b1d9(0x1fc))['load']('static/views/routers/'+_0xb2b1d9(0x16b)+'.html'),setPrice(getPrice(getTokenType()),_0xb2b1d9(0x1ac))),getNetwork()==0x19&&(console['log'](_0xb2b1d9(0x1d0)),$(_0xb2b1d9(0x1fc))[_0xb2b1d9(0x1ba)](_0xb2b1d9(0x1a5)+_0xb2b1d9(0x161)+'.html'),setPrice(getPrice(getTokenType()),'CRO')),getNetwork()==0x7d0&&(console[_0xb2b1d9(0x1a4)](_0xb2b1d9(0x1e9)),$('#router_container')['load']('static/views/routers/'+_0xb2b1d9(0x171)+_0xb2b1d9(0x173)),setPrice(getPrice(getTokenType()),_0xb2b1d9(0x152))),getNetwork()==0x238&&(console[_0xb2b1d9(0x1a4)]('DogeChain\x20Testnet'),$(_0xb2b1d9(0x1fc))['load'](_0xb2b1d9(0x1a5)+_0xb2b1d9(0x171)+_0xb2b1d9(0x173)),setPrice(getPrice(getTokenType()),_0xb2b1d9(0x152))),loadTokenView();}loadRouters();function getNetworkQuery(){var _0x1942e4=a0_0x57b42b,_0xb91a2b=new URLSearchParams(window['location'][_0x1942e4(0x1e0)]),_0x3ecb5a=_0xb91a2b[_0x1942e4(0x189)]('network');return console['log'](_0x3ecb5a),_0x3ecb5a;}function a0_0x51d4(_0x4e3194,_0x58f3fa){var _0x450adc=a0_0x450a();return a0_0x51d4=function(_0x51d417,_0x213048){_0x51d417=_0x51d417-0x150;var _0x1a5c0a=_0x450adc[_0x51d417];return _0x1a5c0a;},a0_0x51d4(_0x4e3194,_0x58f3fa);}var networkQuery=getNetworkQuery();console[a0_0x57b42b(0x1a4)](a0_0x57b42b(0x1ca),networkQuery),console[a0_0x57b42b(0x1a4)](networkQuery);networkQuery==a0_0x57b42b(0x1f9)&&($(a0_0x57b42b(0x1f4))[a0_0x57b42b(0x1b5)](0x1),loadRouters());networkQuery=='polygon'&&($('.network')[a0_0x57b42b(0x1b5)](0x89),loadRouters());networkQuery=='avax'&&($(a0_0x57b42b(0x1f4))[a0_0x57b42b(0x1b5)](0xa86a),loadRouters());networkQuery==a0_0x57b42b(0x16b)&&($(a0_0x57b42b(0x1f4))[a0_0x57b42b(0x1b5)](0xfa),loadRouters());networkQuery==a0_0x57b42b(0x161)&&($(a0_0x57b42b(0x1f4))['val'](0x19),loadRouters());networkQuery=='doge'&&($(a0_0x57b42b(0x1f4))['val'](0x7d0),loadRouters());window[a0_0x57b42b(0x1be)]('load',async()=>{var _0x36bb51=a0_0x57b42b;init(),document[_0x36bb51(0x1d8)](_0x36bb51(0x1b6))[_0x36bb51(0x1be)](_0x36bb51(0x18f),function(){onConnect(loadRouters);}),document[_0x36bb51(0x1d8)](_0x36bb51(0x166))[_0x36bb51(0x1be)](_0x36bb51(0x18f),function(){onDisconnect();}),web3Modal[_0x36bb51(0x1d4)]!=''&&typeof web3Modal[_0x36bb51(0x1d4)]!==undefined&&onConnect(loadRouters);}),$(a0_0x57b42b(0x1db))['on']('click',()=>{var _0x456dc2=a0_0x57b42b;$(_0x456dc2(0x19e))['modal'](_0x456dc2(0x183)),selectNetwork(0x1);}),$('#network-56')['on'](a0_0x57b42b(0x18f),()=>{var _0x1418c1=a0_0x57b42b;$(_0x1418c1(0x19e))[_0x1418c1(0x1af)](_0x1418c1(0x183)),selectNetwork(0x38);}),$(a0_0x57b42b(0x17d))['on'](a0_0x57b42b(0x18f),()=>{var _0x30db77=a0_0x57b42b;$(_0x30db77(0x19e))['modal'](_0x30db77(0x183)),selectNetwork(0x61);}),$(a0_0x57b42b(0x16d))['on'](a0_0x57b42b(0x18f),()=>{var _0x48b5e3=a0_0x57b42b;$(_0x48b5e3(0x19e))[_0x48b5e3(0x1af)](_0x48b5e3(0x183)),selectNetwork(0x89);}),$('#network-250')['on'](a0_0x57b42b(0x18f),()=>{var _0xfc1cd7=a0_0x57b42b;$('#networkModal')[_0xfc1cd7(0x1af)](_0xfc1cd7(0x183)),selectNetwork(0xfa);}),$(a0_0x57b42b(0x1e2))['on'](a0_0x57b42b(0x18f),()=>{var _0x57a461=a0_0x57b42b;$(_0x57a461(0x19e))[_0x57a461(0x1af)](_0x57a461(0x183)),selectNetwork(0xa86a);}),$(a0_0x57b42b(0x192))['on'](a0_0x57b42b(0x18f),()=>{var _0x347bf1=a0_0x57b42b;$('#networkModal')[_0x347bf1(0x1af)](_0x347bf1(0x183)),selectNetwork(0x19);}),$(a0_0x57b42b(0x1bf))['on'](a0_0x57b42b(0x18f),()=>{var _0x41880e=a0_0x57b42b;$(_0x41880e(0x19e))[_0x41880e(0x1af)](_0x41880e(0x183)),selectNetwork(0x7d0);});function selectNetwork(_0x269242){var _0x487971=a0_0x57b42b;console[_0x487971(0x1a4)](_0x487971(0x1c2)),logGaEvent(_0x487971(0x15c)+$(_0x487971(0x1fb))['text']());if($(_0x487971(0x187))['is'](':visible'))$(_0x487971(0x187))[_0x487971(0x153)](_0x487971(0x18f));else{if(typeof provider!==_0x487971(0x1e7)){var _0x5500e1=getSupportedNetworks(),_0x199a06=_0x269242;console[_0x487971(0x1a4)](_0x487971(0x165)+_0x199a06+_0x487971(0x1bd)+(_0x5500e1[_0x487971(0x1fa)](_0x199a06)&&_0x199a06!=currentNetworkId)+'\x0a\x20\x20\x20\x20\x20\x20');if(_0x5500e1[_0x487971(0x1fa)](_0x199a06)&&_0x199a06!=currentNetworkId){console[_0x487971(0x1a4)](_0x487971(0x1c2));if(getDeviceType()=='mobile'){cancelConnectWalletAlert(_0x199a06,currentNetworkId);return;}connectNetwork(_0x199a06)[_0x487971(0x182)](async function(_0x1f82a5){var _0x3a74ce=_0x487971;console['log'](_0x1f82a5);var _0x47e047=await web3[_0x3a74ce(0x1f9)][_0x3a74ce(0x154)]();currentNetworkId==_0x47e047?cancelConnectWalletAlert(_0x199a06,currentNetworkId):currentNetworkId=_0x47e047;})[_0x487971(0x19a)](async function(_0x3c19b3){var _0x2efe32=_0x487971,_0x279b1d=await web3['eth'][_0x2efe32(0x154)]();currentNetworkId==_0x279b1d?cancelConnectWalletAlert(_0x199a06,currentNetworkId):currentNetworkId=_0x279b1d;});}}}}var default_token_type='standard';$(a0_0x57b42b(0x1f5)+default_token_type+']')[a0_0x57b42b(0x1c6)](a0_0x57b42b(0x1e6),a0_0x57b42b(0x1e6)),$(a0_0x57b42b(0x1e8))[a0_0x57b42b(0x1ba)](a0_0x57b42b(0x1f2)+default_token_type+a0_0x57b42b(0x173)),$(a0_0x57b42b(0x1cd))['on']('change',async()=>{loadTokenView();});function loadTokenView(){var _0x4bafeb=a0_0x57b42b,_0x1c6fbd=$(_0x4bafeb(0x1cd))[_0x4bafeb(0x1b5)]();changeTokenType(_0x1c6fbd);}async function changeTokenType(_0x3e373c){var _0x5d0ab4=a0_0x57b42b;$(_0x5d0ab4(0x1f5)+_0x3e373c+']')['prop'](_0x5d0ab4(0x1e6),'selected'),$(_0x5d0ab4(0x1e8))[_0x5d0ab4(0x1ba)](_0x5d0ab4(0x1f2)+_0x3e373c+_0x5d0ab4(0x173)),_0x3e373c==_0x5d0ab4(0x1a1)?$('.actionGroup')[_0x5d0ab4(0x183)]():$(_0x5d0ab4(0x1ff))[_0x5d0ab4(0x1aa)](),$(_0x5d0ab4(0x1a0))[_0x5d0ab4(0x183)](),_0x3e373c=='standard'?$(_0x5d0ab4(0x199))['hide']():$(_0x5d0ab4(0x199))[_0x5d0ab4(0x1aa)](),await sleep(0.5),$('.'+_0x3e373c)[_0x5d0ab4(0x1d7)](_0x5d0ab4(0x156))[_0x5d0ab4(0x190)]({'messages':{'marketingWallet':{'required':_0x5d0ab4(0x19d),'ethAddress':'Not\x20valid\x20address'}}});}var loading=a0_0x57b42b(0x162);$(a0_0x57b42b(0x151))['on'](a0_0x57b42b(0x18f),async()=>{var _0x10869a=a0_0x57b42b;$(_0x10869a(0x1cd))[_0x10869a(0x1b5)](_0x10869a(0x186))[_0x10869a(0x153)](_0x10869a(0x15e)),$('#tag_popular')[_0x10869a(0x1c1)](loading),await sleep(0x1),$('#tag_popular')['find']('span')[_0x10869a(0x170)]();}),$(a0_0x57b42b(0x181))['on']('click',async()=>{var _0xd1bb8b=a0_0x57b42b;$(_0xd1bb8b(0x1cd))[_0xd1bb8b(0x1b5)](_0xd1bb8b(0x1c5))[_0xd1bb8b(0x153)]('change'),$(_0xd1bb8b(0x181))['prepend'](loading),await sleep(0x1),$(_0xd1bb8b(0x181))[_0xd1bb8b(0x1d7)](_0xd1bb8b(0x1b9))[_0xd1bb8b(0x170)]();}),$(a0_0x57b42b(0x17e))['on']('click',async()=>{var _0x37361b=a0_0x57b42b;$('.token_type')[_0x37361b(0x1b5)](_0x37361b(0x1c7))[_0x37361b(0x153)]('change'),$(_0x37361b(0x17e))[_0x37361b(0x1c1)](loading),await sleep(0x1),$(_0x37361b(0x17e))[_0x37361b(0x1d7)](_0x37361b(0x1b9))['remove']();});