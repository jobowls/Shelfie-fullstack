module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => console.log(err))
    },
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        
        db.get_product(id).then(response => {
            res.status(200).send(response)
        }).catch(err => console.log(err))
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
                
        db.add_product([name, price, img])
        .then(response => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    updateProduct: (req, res) => {
		const db = req.app.get("db");
		const {id} = req.params;
        const { name, price, img } = req.body;
        
        db.update_product([id, name, price, img]).then(results => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
	},
	deleteProduct: (req, res) => {
		const db = req.app.get('db');
		const {id} = req.params;

		db.delete_product(id).then(results => {
			res.status(200).send(results)
		}).catch(err => console.log(err))
	}
}