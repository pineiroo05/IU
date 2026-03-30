const estructura_characteristic={
    entity:'characteristic',
    attributes:{
        id_characteristic:{
            html:{
                tag: 'input',
                type: 'number',
                component_visible_size: 5
            },
            db:{
                is_pk: true,
                is_autoincrement: true,
                type: 'int'
            },
            rules:{
                validations:{
                    ADD:{
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT:{
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH:{
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    }
                }
            }
        },
        name_characteristic:{
            html:{
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            db:{
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules:{
                validations:{
                    ADD:{
                        min_size: 8,
                        max_size: 100,
                        exp_reg: '^[A-Za-z\s]+$'
                    },
                    EDIT:{
                        min_size: 8,
                        max_size: 100,
                        exp_reg: '^[A-Za-z\s]+$'
                    },
                    SEARCH:{
                        max_size: 100,
                        exp_reg: '^[A-Za-z\s]+$'
                    }
                }
            }
        },
        description_characteristic:{
            html:{
                tag: 'textarea',
                rows: 5,
                columns: 40,
                component_visible_size: 200
            },
            db:{
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules:{
                validations: {
                    ADD: {
                        min_size: 80,
                        max_size: 5000,
                        exp_reg: '^[A-Za-z\s\\.,:;]+$'
                    },
                    EDIT: {
                        min_size: 80,
                        max_size: 5000,
                        exp_reg: '^[A-Za-z\s\\.,:;]+$'
                    },
                    SEARCH: {
                        //tag: 'input',
                        //type: 'text',
                        min_size: 80,
                        max_size: 5000,
                        exp_reg: '^[A-Za-z\s\\.,:;]+$'
                    }
                }
            }
        },
        data_type_characteristic:{
            html:{
                tag: 'select',
                options: ['number', 'text', 'set'],
                multiple: false,
                component_visible_size: 1
            },
            db:{
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules:{
                validations: {
                    ADD: {
                        min_size: 4,
                        max_size: 6,
                        exp_reg: '^[a-z]+$',
                        personalized: true //llama a specialized_test_data_type_characteristic()
                    },
                    EDIT: {
                        min_size: 4,
                        max_size: 6,
                        exp_reg: '^[a-z]+$',
                        personalized: true
                    },
                    SEARCH: {
                        max_size: 6,
                        exp_reg: '^[a-z]+$'
                        //personalized: true
                    }
                }
            }
        },
        category_characteristic:{
            html:{
                tag: 'select',
                options: ['soil_site', 'soil_chem', 'soil_bio'],
                multiple: false,
                component_visible_size: 1
            },
            db:{
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules:{
                validations: {
                    ADD: {
                        min_size: 8,
                        max_size: 9,
                        exp_reg: '^[a-z\\_]+$',
                        personalized: true //llama a specialized_test_category_characteristic()
                    },
                    EDIT: {
                        min_size: 8,
                        max_size: 9,
                        exp_reg: '^[a-z\\_]+$',
                        personalized: true
                    },
                    SEARCH: {
                        max_size: 9,
                        exp_reg: '^[a-z\\_]+$'
                        //personalized: true
                    }
                }
            }
        },
        bibref_characteristic:{
            html:{
                tag: 'textarea',
                rows: 3,
                columns: 20,
                component_visible_size: 200
            },
            db:{
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules:{
                validations:{
                    ADD:{
                        min_size: 16,
                        max_size: 200,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\s\\.,:;]+$'
                    },
                    EDIT:{
                        min_size: 16,
                        max_size: 200,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\s\\.,:;]+$'
                    },
                    SEARCH:{
                        max_size: 200,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\s\\.,:;]+$'
                    }
                }
            }
        },
        //add y edit
        nuevo_file_characteristic:{
            html:{
                tag: 'input',
                type: 'file',
                component_visible_size: 20
            },
            db:{
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules:{
                validations:{
                    ADD:{
                        type_file:[{max_size_file:2000000},{type_file:['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']},{format_name_file:'^[A-Za-z\\._-]+$'}],
                        max_size_file:[{max_size_file:2000000},{type_file:['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']},{format_name_file:'^[A-Za-z\\._-]+$'}],
                        format_name_file:[{max_size_file:2000000},{type_file:['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']},{format_name_file:'^[A-Za-z\\._-]+$'}]
                    },
                    EDIT:{
                        type_file:[{max_size_file:2000000},{type_file:['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']},{format_name_file:'^[A-Za-z\\._-]+$'}],
                        max_size_file:[{max_size_file:2000000},{type_file:['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']},{format_name_file:'^[A-Za-z\\._-]+$'}],
                        format_name_file:[{max_size_file:2000000},{type_file:['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']},{format_name_file:'^[A-Za-z\\._-]+$'}]
                    }
                }
            }
        },
        //search
        file_characteristic:{
            html:{
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            db:{
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules:{
                validations:{
                    SEARCH:{
                        max_size: 100,
                        exp_reg: '^[A-Za-z\\.]+$'
                    }
                }
            }
        }
    }
}