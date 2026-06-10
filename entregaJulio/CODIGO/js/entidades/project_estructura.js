const estructura_project= {
    entity: 'project',
    attributes: {
        id_project: {
            html: {
                tag: 'input',
                type: 'number',
                component_visible_size: 5
            },
            db: {
                is_pk: true,
                is_autoincrement: true,
                type: 'int'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    }
                }
            }
        },
        name_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 15,
                        max_size: 100,
                        exp_reg: '^[A-Za-z\\s]+$'
                    },
                    EDIT: {
                        min_size: 15,
                        max_size: 100,
                        exp_reg: '^[A-Za-z\\s]+$'
                    },
                    SEARCH: {
                        max_size: 100,
                        exp_reg: '^[A-Za-z\\s]+$'
                    }
                }
            }
        },
        start_date_project: {
            html: {
                tag: 'input',
                type: 'date',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'date',
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 10,
                        max_size: 10,
                        exp_reg: '^[0-9]{2}/[0-9]{2}/[0-9]{4}$', //Luego habria que convertir el input date en string para que trabaje con las barras. Recuperar la hardcodeada de miguel anxo
                        personalized: true //Mira que la fecha no sea pasada
                    },
                    EDIT: {
                        min_size: 10,
                        max_size: 10,
                        exp_reg: '^[0-9]{2}/[0-9]{2}/[0-9]{4}$',
                        personalized: true
                    },
                    SEARCH: {
                        max_size: 10,
                        exp_reg: '^[0-9/]+$',
                        personalized:true
                    }
                }
            }
        },
        end_date_project: {
            html: {
                tag: 'input',
                type: 'date',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'date',
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 10,
                        max_size: 10,
                        exp_reg: '^[0-9]{2}/[0-9]{2}/[0-9]{4}$',
                        personalized: true
                    },
                    EDIT: {
                        min_size: 10,
                        max_size: 10,
                        exp_reg: '^[0-9]{2}/[0-9]{2}/[0-9]{4}$',
                        personalized: true
                    },
                    SEARCH: {
                        max_size: 10,
                        exp_reg: '^[0-9/]+$',
                        personalized:true
                    }
                }
            }
        },
        responsable_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 6,
                        max_size: 60,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$'
                    },
                    EDIT: {
                        min_size: 6,
                        max_size: 60,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$'
                    },
                    SEARCH: {
                        max_size: 60,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$'
                    }
                }
            }
        },
        organization_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 6,
                        max_size: 100,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$'
                    },
                    EDIT: {
                        min_size: 6,
                        max_size: 100,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$'
                    },
                    SEARCH: {
                        max_size: 100,
                        exp_reg: '^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$'
                    }
                }
            }
        },
        description_project: {
            html: {
                tag: 'textarea',
                rows: 3,
                columns: 20,
                component_visible_size: 20
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 30,
                        max_size: 500,
                        exp_reg: '^[\\u0000-\\u024F\\s]+$'
                    },
                    EDIT: {
                        min_size: 30,
                        max_size: 500,
                        exp_reg: '^[\\u0000-\\u024F\\s]+$'
                    },
                    SEARCH: {
                        max_size: 500,
                        exp_reg: '^[\\u0000-\\u024F\\s]+$'
                    }
                }
            }
        },
        nuevo_file_project: {
            html: {
                tag: 'input',
                type: 'file',
                component_visible_size: 20
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    ADD: {
                        not_exist_file: true,
                        type_file: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
                        max_size_file: 2000000,
                        min_file_name_size: 7,
                        max_file_name_size: 100,
                        format_name_file: '^[A-Za-z\\.]+$'
                    },
                    EDIT: {
                        type_file: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
                        max_size_file: 2000000,
                        min_file_name_size: 7,
                        max_file_name_size: 100,
                        format_name_file: '^[A-Za-z\\.]+$'
                    }
                }
            }
        },
        //search
        file_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    SEARCH: {
                        max_size: 100,
                        exp_reg: '^[A-Za-z\\.]+$'
                    }
                }
            }
        },
        //Como manejo el unique??
        code_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 6,
                        max_size: 50,
                        exp_reg: '^[A-Za-zÑñ\\s\\.,:;\\-]+$'
                    },
                    EDIT: {
                        min_size: 6,
                        max_size: 50,
                        exp_reg: '^[A-Za-zÑñ\\s\\.,:;\\-]+$'
                    },
                    SEARCH: {
                        max_size: 50,
                        exp_reg: '^[A-Za-zÑñ\\s\\.,:;\\-]+$'
                    }
                }
            }
        },
        acronym_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'string'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 6,
                        max_size: 15,
                        exp_reg: '^[A-Za-zÑñ\\.:,;\\-]+$'
                    },
                    EDIT: {
                        min_size: 6,
                        max_size: 15,
                        exp_reg: '^[A-Za-zÑñ\\.,:;\\-]+$'
                    },
                    SEARCH: {
                        max_size: 15,
                        exp_reg: '^[A-Za-zÑñ\\.,:;\\-]+$'
                    }
                }
            }
        },
        id_sampling_methodology: {
            html: {
                tag: 'input',
                type: 'number',
                component_visible_size: 10
            },
            db: {
                is_pk: false,
                is_autoincrement: false,
                type: 'int'
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        max_size: 11,
                        exp_reg: '^[0-9]+$'
                    }
                }
            }
        }
    }
}