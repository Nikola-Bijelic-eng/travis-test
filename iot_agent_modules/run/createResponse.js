module.exports = {
    createResponse: function(id, type, attributes, body) {
        var values = body.split(',');
        var responses = [];

        for (var i = 0; i < attributes.length; i++) {
            responses.push({
                name: attributes[i],
                type: 'string',
                value: values[i]
            });
        }

        return {
            id: id,
            type: type,
            attributes: responses
        };
    }
};
