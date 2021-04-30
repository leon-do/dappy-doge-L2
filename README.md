# Onboard Wallet Auth

Passwordless Login to Game Engine

Login Code is broken into 3 parts:

```
1. Signed message
2. Signer address
3. Expiration timestamp

Example: 0x1843015ad6a2932ab9c12d71557b193bc916cef37fc09002a2178f3c2f5e9b1b0d2cc2ac580fa0c5895dbd8ac357e22d3c4917a01365dbae14805f9fb6b2b9be1b-0x35706484aB20Cbf22F5c7a375D5764DA8166aE1c-161402460

Signing "0x3570...-161402460"
will create signed message
"0x1843015ad..."
```

To Verify

```javascript
window.web3 = new Web3(window.web3.currentProvider);
const msg = "0x35706484aB20Cbf22F5c7a375D5764DA8166aE1c-1614025671";
const sig =
  "0x37c0b3c25a082f6876ec4952b67e897b2936bb454ba32543c3af6336917c5fd01b7bf70e2dbad52d4dc28006e88a0151e007d727c44a629a8ac8792aef53d9551c";
  
web3.eth.personal
  .ecRecover(msg, sig)
  .then((owner) =>
    console.log(
      owner == "0x35706484aB20Cbf22F5c7a375D5764DA8166aE1c".toLowerCase()
    )
  );
```

### Local

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Deploy

`yarn deploy`

Will deploy to github pages

