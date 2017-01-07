/**
 * Created by djeyachandran on 1/6/17.
 */
var header = $("meta[name='_csrf_header']").attr("content");
var token = $("meta[name='_csrf']").attr("content");

var App = React.createClass({

    loadProducts: function () {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/api/products"
        }).then(function (data) {
            self.setState({products: data._embedded.products});
        });
    },

    getInitialState: function () {
        return {products: []};
    },

    componentDidMount: function () {
        this.loadProducts();
    },

    render: function () {
        return (<ProductsTable products={this.state.products}/>)
    }
});

var Product = React.createClass({

    getInitialState:function(){
        return {display:true};
    },

    handleDelete(){
        var self = this;
        $.ajax({
            url:self.props.product._links.self.href,
            type:'DELETE',
            beforeSend: function(xhr){
                xhr.setRequestHeader(header, token);
            },
            success:function(result) {
                self.setState({display:false});
            },
            error:function(xhr, ajaxOptions, thrownError){
                toastr.error(xhr.responseJSON.message);
            }
        });
    },

    render: function () {
        if(this.state.display == false) return null;
        else return (
            <tr>
            <td>{this.props.product.name}</td>
        <td>{this.props.product.currentPrice}</td>
        <td>{this.props.product.previousPrice}</td>
        <td>
        <button className="btn btn-info" onClick={this.handleDelete}>Delete</button>
        </td>
        </tr>
        )
    }
});
var ProductsTable = React.createClass({
    render: function () {
        var rows = [];
        this.props.products.forEach(function (product) {
            rows.push(<Product key={product.name} product={product}/>);
        });
        return (
            <div className="container">
            <table className="table table-striped">
            <thead>
            <tr>
            <th>Name</th>
            <th>Current Price</th>
        <th>Previous Price</th>
        <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
        </table>
        </div>
        );
    }
});

ReactDOM.render(
<App />, document.getElementById('root')
);