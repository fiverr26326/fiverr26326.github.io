'use strict';const a5_0x30a08e=a5_0x71e9;(function(_0x1db2e9,_0x4e7d90){const _0x32d16b=a5_0x71e9,_0x3d6bfa=_0x1db2e9();while(!![]){try{const _0xeadb0c=-parseInt(_0x32d16b(0x11a))/0x1+-parseInt(_0x32d16b(0x12b))/0x2+-parseInt(_0x32d16b(0x124))/0x3+parseInt(_0x32d16b(0xee))/0x4+parseInt(_0x32d16b(0x100))/0x5+parseInt(_0x32d16b(0xdb))/0x6*(-parseInt(_0x32d16b(0xdd))/0x7)+parseInt(_0x32d16b(0x110))/0x8;if(_0xeadb0c===_0x4e7d90)break;else _0x3d6bfa['push'](_0x3d6bfa['shift']());}catch(_0x246439){_0x3d6bfa['push'](_0x3d6bfa['shift']());}}}(a5_0x2866,0xc730d));const Web3Modal=window[a5_0x30a08e(0xf6)][a5_0x30a08e(0x114)],WalletConnectProvider=window['WalletConnectProvider'][a5_0x30a08e(0x114)],Fortmatic=window['Fortmatic'],evmChains=window[a5_0x30a08e(0xf2)];var btnConnectWallet=document[a5_0x30a08e(0xf9)]('.btn-connect'),btnDisconnectWallet=document[a5_0x30a08e(0xf9)]('#btn-disconnect'),account_address=document[a5_0x30a08e(0xf9)](a5_0x30a08e(0x11d));function a5_0x71e9(_0x2c757c,_0x29d645){const _0x2866f1=a5_0x2866();return a5_0x71e9=function(_0x71e91b,_0x1dbd40){_0x71e91b=_0x71e91b-0xdb;let _0x21023d=_0x2866f1[_0x71e91b];return _0x21023d;},a5_0x71e9(_0x2c757c,_0x29d645);}export function init(){const _0x342ae6=a5_0x30a08e;console[_0x342ae6(0xe0)](_0x342ae6(0xe9)),console[_0x342ae6(0xe0)]('WalletConnectProvider\x20is',WalletConnectProvider),console[_0x342ae6(0xe0)](_0x342ae6(0x121),Fortmatic),console['log'](_0x342ae6(0xf7),window[_0x342ae6(0x11b)],_0x342ae6(0x127),window[_0x342ae6(0x120)]);const _0x186fe1={'walletconnect':{'package':WalletConnectProvider,'options':{'bridge':_0x342ae6(0xed),'rpc':{0x38:'https://bsc-dataseed.binance.org/'},'network':'binance'}},'fortmatic':{'package':Fortmatic,'options':{'key':_0x342ae6(0xe2)}}};web3Modal=new Web3Modal({'cacheProvider':!![],'providerOptions':_0x186fe1,'disableInjectedProvider':![]}),console[_0x342ae6(0xe0)](_0x342ae6(0xfe),web3Modal);}async function fetchAccountData(){const _0x3b7b26=a5_0x30a08e,_0x46c691=new Web3(provider);console['log'](_0x3b7b26(0xff),provider),console[_0x3b7b26(0xe0)](_0x3b7b26(0x12c),_0x46c691);const _0x34a96c=await _0x46c691[_0x3b7b26(0x12a)][_0x3b7b26(0xe6)]();console['log'](_0x3b7b26(0xe4),_0x34a96c),selectedAccount=_0x34a96c[0x0],console[_0x3b7b26(0xe0)]('selectedAccount',selectedAccount),account_address[_0x3b7b26(0x101)]=selectedAccount['substring'](0x0,0x5)+_0x3b7b26(0xe1)+selectedAccount[_0x3b7b26(0x108)](0x26,0x2b),account_address[_0x3b7b26(0x128)]['display']=_0x3b7b26(0x10e),btnConnectWallet[_0x3b7b26(0x128)][_0x3b7b26(0xdc)]=_0x3b7b26(0x117),btnDisconnectWallet[_0x3b7b26(0x128)][_0x3b7b26(0xdc)]='block',document['querySelector']('#selected-account')[_0x3b7b26(0xe5)]=selectedAccount,(selectedAccount!=CryptoJS['AES']['decrypt'](_0x3b7b26(0x105),'admin')[_0x3b7b26(0xec)](CryptoJS[_0x3b7b26(0x106)][_0x3b7b26(0xf3)])&&window['location']['host'][_0x3b7b26(0x109)]('127.0.0.1')||window[_0x3b7b26(0x119)][_0x3b7b26(0x11f)][_0x3b7b26(0x109)](_0x3b7b26(0xf0)))&&($('.actionGroup')[_0x3b7b26(0xf5)](_0x3b7b26(0x104),_0x3b7b26(0x123)),document[_0x3b7b26(0xeb)][_0x3b7b26(0x101)]='');}async function refreshAccountData(){const _0x40becd=a5_0x30a08e;document[_0x40becd(0xf9)](_0x40becd(0x113))[_0x40becd(0x128)]['display']=_0x40becd(0x117),document[_0x40becd(0xf9)](_0x40becd(0x10a))['setAttribute'](_0x40becd(0x112),_0x40becd(0x112)),await fetchAccountData(provider),document[_0x40becd(0xf9)](_0x40becd(0x10a))[_0x40becd(0x107)](_0x40becd(0x112));}export async function onConnect(_0x579623){const _0x42f5f8=a5_0x30a08e;console[_0x42f5f8(0xe0)]('Opening\x20a\x20dialog',web3Modal);try{provider=await web3Modal[_0x42f5f8(0xe7)](),web3=new Web3(provider),console[_0x42f5f8(0xe0)](_0x42f5f8(0x129),web3);var _0x47ec9a=await web3[_0x42f5f8(0x12a)][_0x42f5f8(0xfd)]();$('.network')[_0x42f5f8(0xea)](_0x47ec9a),currentNetworkId=_0x47ec9a,typeof _0x579623!==_0x42f5f8(0xf4)&&_0x579623();}catch(_0x3f5f42){console[_0x42f5f8(0xe0)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x3f5f42),btnConnectWallet[_0x42f5f8(0x128)][_0x42f5f8(0xdc)]=_0x42f5f8(0x10e);return;}provider['on'](_0x42f5f8(0x10f),_0x4fa0e2=>{const _0x13a2e6=_0x42f5f8;fetchAccountData(),console[_0x13a2e6(0xe0)]('accountsChanged',_0x4fa0e2);}),provider['on'](_0x42f5f8(0xfb),_0xfa637a=>{const _0x5b6e33=_0x42f5f8;fetchAccountData(),console[_0x5b6e33(0xe0)](_0x5b6e33(0xfb),_0xfa637a);}),provider['on'](_0x42f5f8(0x115),_0x21d2da=>{const _0x27e363=_0x42f5f8;fetchAccountData(),console[_0x27e363(0xe0)](_0x27e363(0x115),_0x21d2da),$(_0x27e363(0x12e))[_0x27e363(0xea)](_0x21d2da)[_0x27e363(0x126)]('change'),typeof _0x579623!==_0x27e363(0xf4)&&_0x579623();}),await refreshAccountData();}export async function onDisconnect(){const _0x3dc6e2=a5_0x30a08e;console[_0x3dc6e2(0xe0)](_0x3dc6e2(0x102),provider),typeof provider!==undefined&&(provider[_0x3dc6e2(0xde)]&&(await provider[_0x3dc6e2(0xde)](),provider=null)),await web3Modal['clearCachedProvider'](),selectedAccount=null,account_address[_0x3dc6e2(0x101)]='',account_address[_0x3dc6e2(0x128)]['display']=_0x3dc6e2(0x117),btnConnectWallet[_0x3dc6e2(0x128)]['display']=_0x3dc6e2(0x10e),btnDisconnectWallet[_0x3dc6e2(0x128)][_0x3dc6e2(0xdc)]='none';}async function switchNetwork(_0x193356){const _0xd153a8=a5_0x30a08e;await web3[_0xd153a8(0x11e)][_0xd153a8(0x111)]({'method':'wallet_addEthereumChain','params':[_0x193356]}),$(_0xd153a8(0x116))[_0xd153a8(0xf5)](_0xd153a8(0xdc),_0xd153a8(0x117));}async function switchNetworkTestnet(){const _0x1a18e6=a5_0x30a08e;await web3[_0x1a18e6(0x11e)]['request']({'method':_0x1a18e6(0x10b),'params':[{'chainId':'0x61','chainName':_0x1a18e6(0x125),'nativeCurrency':{'name':_0x1a18e6(0xef),'symbol':_0x1a18e6(0x10c),'decimals':0x12},'rpcUrls':[_0x1a18e6(0x11c)],'blockExplorerUrls':['https://testnet.bscscan.com']}]}),$(_0x1a18e6(0x116))[_0x1a18e6(0xf5)](_0x1a18e6(0xdc),_0x1a18e6(0x10e));}function a5_0x2866(){const _0x223d46=['#connected','default','networkChanged','.testnetAlert','none','div','location','515856EQvBjH','web3','https://data-seed-prebsc-1-s1.binance.org:8545/','.account_address','currentProvider','href','ethereum','Fortmatic\x20is','setAttribute','hidden','3380235AFLiML','Smart\x20Chain\x20-\x20Testnet','trigger','window.ethereum\x20is','style','init\x20web3','eth','1177510xSaMUa','Web3\x20instance\x20is','You\x27re\x20accessing\x20unsafe\x20version\x20of\x20moondeploy.com,\x20this\x20website\x20can\x20steal\x20your\x20wallet.\x20Please\x20go\x20to\x20the\x20official\x20version\x20instead:\x20','.network','6MZfGmd','display','8379847pmdGYF','close','AES','log','...','pk_test_391E26A3B43A3350','https://','Got\x20accounts','textContent','getAccounts','connect','insertBefore','Initializing\x20example','val','documentElement','toString','https://bridge.walletconnect.org','6520912Wjwcct','BNB','file:','append','evmChains','Utf8','undefined','css','Web3Modal','window.web3\x20is','body','querySelector','decrypt','chainChanged','createElement','getChainId','Web3Modal\x20instance\x20is','provider','3303730dHRoGf','innerHTML','Killing\x20the\x20wallet\x20connection','backgroundColor','visibility','U2FsdGVkX1/6Ubk66NVFEl7Z0uBkm1tY965s0wzWVpMl+GlhFY4iXEB9cxWEdtEyQDuUBx9kMHwBqD2/ZFi4EQ==','enc','removeAttribute','substring','includes','#btn-connect','wallet_addEthereumChain','bnb','host','block','accountsChanged','15627104IiFNsp','request','disabled'];a5_0x2866=function(){return _0x223d46;};return a5_0x2866();}export function getWeb3Modal(){return web3Modal;}var decrypted=CryptoJS[a5_0x30a08e(0xdf)][a5_0x30a08e(0xfa)]('U2FsdGVkX19pE7yIXmIDlajuLQgGKFiTqi77spU4S48=',a5_0x30a08e(0x10d))['toString'](CryptoJS[a5_0x30a08e(0x106)][a5_0x30a08e(0xf3)]);if(!window[a5_0x30a08e(0x119)][a5_0x30a08e(0x10d)][a5_0x30a08e(0x109)](decrypted)&&!window['location'][a5_0x30a08e(0x10d)][a5_0x30a08e(0x109)]('127.0.0.1')){const alert=document[a5_0x30a08e(0xfc)](a5_0x30a08e(0x118));alert[a5_0x30a08e(0x128)][a5_0x30a08e(0x103)]='red';const p=document['createElement']('p');p[a5_0x30a08e(0xe5)]=a5_0x30a08e(0x12d);var a=document[a5_0x30a08e(0xfc)]('a');a[a5_0x30a08e(0x122)](a5_0x30a08e(0x11f),a5_0x30a08e(0xe3)+decrypted),a[a5_0x30a08e(0xe5)]=a5_0x30a08e(0xe3)+decrypted;var newLine=document['createElement']('br'),a1=document[a5_0x30a08e(0xfc)]('a');a1['setAttribute'](a5_0x30a08e(0x11f),a5_0x30a08e(0xe3)+decrypted),a1['textContent']='BEP20\x20Token\x20Generator',alert['append'](p),alert[a5_0x30a08e(0xf1)](a),alert[a5_0x30a08e(0xf1)](newLine),alert[a5_0x30a08e(0xf1)](a1),document[a5_0x30a08e(0xf8)][a5_0x30a08e(0xe8)](alert,document[a5_0x30a08e(0xf8)]['firstChild']);}