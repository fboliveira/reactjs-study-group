class DataNames extends React.Component {

    dataByGender(gender) {

        return this.props.names.filter(

            item => {
                if ( item.gender == gender ) {
                    return item
                }
            }

        )    

    }

    render() {

        return(

            <>

                <p>Pessoas:</p>

                <ul>
                {
                    // MAP ->
                    // foreach( item : names ) {
                    // item.name
                    //}
                    this.dataByGender(this.props.gender).map(
                        ( item, index ) => <li key={ index }>{ item.name }</li>
                    )
                }
                </ul>

            </>


        );

    }

}