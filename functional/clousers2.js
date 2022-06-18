const f = (x) => {
    return () => {
        console.log(`Rayos ${x}`);

    }
}

const auditProps = {
    createdAt: { default: new Date },
    updatedAt: { default: new Date },
    createdBy: {
        type: Schema.types.ObjectId, 
        ref: 'User'
    }
}

const Model = defaultProps => {
    return (name, props) =>  {
        const schema = mongoose.schema({
            ...defaultProps,
            ...props
        })

        return moongose.model(name, schema);
    }
}


export const withAudit = Model(defaultProps);

withAudit('User', {
    name: String,
    email: String
})