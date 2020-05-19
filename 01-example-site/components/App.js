class App extends React.Component {

    render() {

        return(
            <>
             <Title />
             <Menu />
             <Welcome nome={ this.props.nome } />
             <DataNames names = { this.props.pessoas } gender = "F" />
             <DataNames names = { this.props.pessoas } gender = "M" />
            </>
        );

    }

}