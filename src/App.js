import React from 'react';
import GetForecast from "./Components/GetForecast";
import {Container,Content,Footer,FlexboxGrid,Divider} from "rsuite";
import MyFooter from "./Components/Footer";

function App() {
    return (
        <div className="App">
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
