import React, { useState } from 'react';
import GetForecast from "./Components/GetForecast";
import {Container,Content,Footer,FlexboxGrid,Divider,Button} from "rsuite";
import MyFooter from "./Components/Footer";

function App() {
    const [installable,setInstallable]=useState(false);

    window.addEventListener('beforeinstallprompt', (event) => {
        window.deferredPrompt = event;
        setInstallable(true)
      });

      const handleInstall=()=>{
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        promptEvent.userChoice.then((result) => {
          // Reset the deferred prompt variable, since
          // prompt() can only be called once.
          window.deferredPrompt = null;
          // Hide the install button.
         setInstallable(false)
        });

      }
    return (
        <div className="App">
            {installable?<div style={{borderBottom:"1px lightgray solid", display:"flex",justifyContent:"flex-end",padding:"2px 5px"}}>
                <Button appearance="primary" size="sm" onClick={handleInstall}>Install</Button>
            </div>:<></>}
            <Container>
                <Content>
                    <FlexboxGrid justify="center">
                        <GetForecast/>
                    </FlexboxGrid>
                </Content>
                <Divider/>
                <Footer>
                    <FlexboxGrid justify="center">
                        <MyFooter/>
                    </FlexboxGrid>
                </Footer>
            </Container>
        </div>
    );
}

export default App;
