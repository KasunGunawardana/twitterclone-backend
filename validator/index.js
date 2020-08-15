exports.createPostValidator = (req, res, next) => {
    //title
    req.check('title', "Write the title").notEmpty();
    req.check('title', "Title must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });

    //body
    req.check('body', "Write the body").notEmpty();
    req.check('body', "Body must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    });
    //check for errors
    const errors = req.validationErrors();

    // if error show the first one as they happeen
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next();
};

exports.userSignupValidator = (req, res, next) => {
    //name
    req.check('name', "Name is required").notEmpty();
    req.check('name', "Name must be between 4 to 32 characters").isLength({
        min: 4,
        max: 32
    });

    //email
    req.check('email', "Email is required").notEmpty();
    req.check('email', "This is not a valid email").matches(/.+\@.+\..+/);
    req.check('email', "Email must be between 4 to 32 characters").isLength({
        min: 4,
        max: 32
    });

    //email
    req.check('password', "Password is required").notEmpty();
    req.check('password')
    .isLength({ min: 6})
    .withMessage("Password must contain atleast 6 charactors")
    .matches(/\d/)
    .withMessage("Password must contain atleast 1 number");
    //check for errors
    const errors = req.validationErrors();

    // if error show the first one as they happeen
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next();
};