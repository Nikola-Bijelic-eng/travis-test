module.exports = {
    callMethods: function(value, methods, the_session) {
        // TODO Metodi multipli
        if (!methods) return;
        try {
            methods[0].inputArguments = [
                {
                    dataType: dataType.String,
                    arrayType: VariantArrayType.Scalar,
                    value: value
                }
            ];
            the_session.call(methods, function(err, results) {
                if (!err) console.log('Method invoked correctly with result: '.bold.yellow, results[0].toString());
                else console.log('Error calling Method :'.bold.red, err);
            });
        } catch (error) {
            console.log('Error calling Method :'.bold.red, error);
        }
    }
};
