class App extends React.Component {

    render() {

        return(
            <React.Fragment>
             <Title />
             <Welcome nome={ this.props.nome } />
            </React.Fragment>
        );

    }

}