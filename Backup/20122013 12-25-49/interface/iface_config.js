var $ga_jcfg = {
	'config' : {
		'IgnoredCheckErrorsList' : '',
		'CurrencyName' : 'руб.',
		'CurrencyType' : 'RUR',
		'OutOfOrderPassword' : '1234',
		'InterfaceSoundVolume' : '-1',
		'NoChangeMessage' : '1',
		'ShowTitleScreen' : '0',
		'ShowAutodetectWarning' : '0',
		'TerminalName' : '99999',
		'SupportString' : 'Tелефон техподдержки: [b]+7 (800) 100-800-3, с 9:00 до 20:00[/b][br]e-mail: [b]info@forwardmobile.ru[/b]',
		'MainMenuMarqueeString' : 'За проведение платежа взимается комиссия.',
		'MainMenuBanner' : '0',
		'SkinName' : 'metro2'
	},
	'operators' : {
		'999' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Выбор оператора',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'check_in_local_base' : '1',
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Оператор будет автоматически определен по введенному Вами номеру телефона![/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'image' : 'mob_999.gif',
			'rootmenuimage' : 'main_999.gif',
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'0' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МТС ЕСПП',
			'inn_for_cheque' : '7740000076',
			'image' : 'mob_mts_espp.gif',
			'rootmenuimage' : 'main_mts.jpg',
			'eppa' : '1',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-800-333-0890',
			'dog' : '2/ПЦ1/04.06 от 14.04.2006 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'2' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'БиЛайн',
			'image' : 'mob_beeline.gif',
			'inn_for_cheque' : '7713076301',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : 'Д182/2 от 01.07.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'10' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Мегафон',
			'comment' : 'код + прямые городские',
			'image' : 'mob_megafon.gif',
			'inn_for_cheque' : '2308071777',
			'rootmenuimage' : 'main_megafon.jpg',
			'bonus' : '0',
			'name_div' : 'bonus',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0500',
			'dog' : 'П-2006-19 от 15.05.2006 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'13' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Смартс Самара',
			'comment' : 'код 902,904,908',
			'image' : 'mob_smarts_samara.gif',
			'inn_for_cheque' : '6311008571',
			'rootmenuimage' : 'sm.gif',
			'limit' : {
				'min' : '10',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'14' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Смартс Ярославль',
			'comment' : 'Код 902',
			'image' : 'mob_smarts_yaroslavl.gif',
			'inn_for_cheque' : '7710377540',
			'rootmenuimage' : 'sm.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'15' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Смартс Чебоксары',
			'comment' : 'Код 902,904,908',
			'image' : 'mob_smarts_cheboksary.gif',
			'inn_for_cheque' : '7710377540',
			'rootmenuimage' : 'sm.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'16' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Смартс Астрахань',
			'comment' : 'Код 902, 908, 8512',
			'image' : 'mob_smarts_astrahan.gif',
			'inn_for_cheque' : '7710377540',
			'rootmenuimage' : 'sm.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'17' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Смартс Волгоград',
			'comment' : 'Код 902, 908, 8512',
			'image' : 'mob_smarts_volgograd.gif',
			'inn_for_cheque' : '7710377540',
			'rootmenuimage' : 'sm.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'18' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Смартс Пенза',
			'comment' : 'Код 908',
			'image' : 'mob_smarts_penza.gif',
			'inn_for_cheque' : '7710377540',
			'rootmenuimage' : 'sm.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'19' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'СкайЛинк Москва',
			'image' : 'mob_skylink.gif',
			'inn_for_cheque' : '7740000012',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'20' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Корбина Телеком',
			'image' : 'mob_corbina.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета',
					'mask' : '*************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'inn_for_cheque' : '2309074812',
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'21' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Теле 2',
			'image' : 'mob_tele2.gif',
			'inn_for_cheque' : '6163025500',
			'rootmenuimage' : 'main_tele2.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '611',
			'dog' : 'ОПП 12/1, ОПП 12/2, ОПП 12/3, ОПП 12/4, ОПП 12/5, ОПП 12/6, ОПП 12/7, ОПП 12/8, ОПП 12/9, ОПП 12/10, ОПП 12/11, ОПП 12/12, ОПП 12/13, ОПП 12/14, ОПП 12/15, ОПП 12/16, ОПП 12/17, ОПП 12/18, ОПП 12/19, ОПП 12/20, ОПП 12/21, ОПП 12/22, ОПП 12/23, ОПП 12/24,',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'22' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НТК',
			'image' : 'mob_ntk.gif',
			'inn_for_cheque' : '7710377540',
			'rootmenuimage' : 'main_ntk.jpg',
			'limit' : {
				'min' : '50',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'23' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НСС Нижний Новгород',
			'image' : 'mob_nss.gif',
			'inn_for_cheque' : '5260053878',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'25' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'U-tel',
			'image' : 'mob_utel.gif',
			'inn_for_cheque' : '7303022888',
			'rootmenuimage' : 'main_utel.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'26' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Мотив',
			'image' : 'mob_motiv.gif',
			'inn_for_cheque' : '6661079603',
			'limit' : {
				'min' : '10',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'27' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Матрикс Телеком',
			'inn_for_cheque' : '7705348953',
			'image' : 'mob_matrix.gif',
			'limit' : {
				'min' : '50',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'28' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Енисей-Телеком',
			'image' : 'mob_et.gif',
			'inn_for_cheque' : '7710377540',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '2',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '22',
					'value' : '3',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part2' : {
					'min' : '32',
					'value' : '4',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part3' : {
					'min' : '42',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part4' : {
					'min' : '102',
					'value' : '5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'29' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МетроТелКазань',
			'image' : 'mob_metrotel.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'31' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Корбина Телеком Интернет',
			'image' : 'int_corbina.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '*************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'32' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НТВ+',
			'image' : 'tel_ntv-plus.gif',
			'inn_for_cheque' : '7703121379',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495) 755-67-89',
			'dog' : '252/1-09 от 25.12.2009',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'33' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Космос ТВ',
			'image' : 'tel_kosmos-tv.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета',
					'mask' : '******'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'34' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Зебра Телеком',
			'image' : 'int_zebra.gif',
			'limit' : {
				'min' : '1',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '7',
					'maxlength' : '8',
					'name' : 'Номер карты'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'inn_for_cheque' : '7702289795',
			'name_for_cheque' : '8-800-100-1750',
			'dog' : '004-КЗТ/ПИН-01/11 от 01.01.11 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'41' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'АКОС',
			'image' : 'mob_akos.gif',
			'inn_for_cheque' : '2540001972',
			'rootmenuimage' : 'main_akos.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'42' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТатИнком',
			'image' : 'mob_tatinkom.gif',
			'inn_for_cheque' : '7710377540',
			'limit' : {
				'min' : '1',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'44' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ИНДИГО',
			'image' : 'mob_indigo.gif',
			'limit' : {
				'min' : '1',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'45' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Скайлинк Санкт-Петербург',
			'rootmenuimage' : 'main_skylink.jpg',
			'inn_for_cheque' : '7710377540',
			'image' : 'mob_skylink.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'46' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Скайлинк Нижний Новгород',
			'rootmenuimage' : 'main_skylink.jpg',
			'image' : 'mob_skylink.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'47' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Скайлинк Екатеринбург',
			'rootmenuimage' : 'main_skylink.jpg',
			'inn_for_cheque' : '6660011313',
			'image' : 'mob_skylink.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'48' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Скайлинк Владимир',
			'rootmenuimage' : 'main_skylink.jpg',
			'inn_for_cheque' : '3329016088',
			'image' : 'mob_skylink.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'49' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Скайлинк Удмуртия',
			'rootmenuimage' : 'main_skylink.jpg',
			'image' : 'mob_skylink.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'430' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Скайлинк Краснодар',
			'rootmenuimage' : 'main_skylink.jpg',
			'inn_for_cheque' : '7705858312',
			'image' : 'mob_skylink.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(861) 211-99-11',
			'dog' : '63/1 от 11.06.2007г. (д.с.№2 от 13.01.09)',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'61' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Ульяновск GSM',
			'image' : 'mob_ulyanovsk_gsm.gif',
			'inn_for_cheque' : '7303022888',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'62' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Кодотел',
			'image' : 'mob_kodotel.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (****) **-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'63' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Дальсвязь (Приморский край)',
			'image' : 'mob_dalsvyaz.gif',
			'limit' : {
				'min' : '10',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				},
				'101' : {
					'id' : '101',
					'type' : 'enum',
					'name' : 'Тип платежа',
					'enum' : '',
					'enum' : {
						'1' : 'Дальсвязь',
						'3' : 'МТТ (ИСС)',
						'4' : 'МТТ',
						'10' : 'Аудиотеле'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'64' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Байкалвестком',
			'image' : 'mob_baikalvestkom.gif',
			'inn_for_cheque' : '3812005230',
			'limit' : {
				'min' : '10',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'67' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Россия ONLINE',
			'image' : 'int_rol.gif',
			'inn_for_cheque' : '7717036194',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '3',
					'maxlength' : '10',
					'name' : 'Номер договора'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'57' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Арктел',
			'image' : 'arktel.gif',
			'inn_for_cheque' : '5047056745',
			'rootmenuimage' : 'main_arktel.gif',
			'limit' : {
				'min' : '30',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '9',
					'name' : 'Номер карты'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'153' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата телефонии',
			'inn_for_cheque' : '2308073414',
			'image' : 'int_tigr.gif',
			'rootmenuimage' : 'main_novotelecom.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'ПИН КОД карты',
					'mask' : '*******'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 219-52-22',
			'dog' : '28/11 от 28.12.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'154' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата интернет',
			'image' : 'int_tigronet.gif',
			'inn_for_cheque' : '2308073414',
			'rootmenuimage' : 'main_novotelecom.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'ЛОГИН АБОНЕНТА или ПИН КОД карты'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 219-52-22',
			'dog' : '28/11 от 28.12.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'179' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Телекомсервис',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'klava' : 'lat',
					'name' : 'Номер счета',
					'comment' : '[b]Внимание!!![/b] Номер счета может состоять из [b]цифр[/b], [b]заглавных[/b] и [b]маленьких[/b] [b]латинских[/b] букв.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'image' : 'int_telecomservice.gif',
			'rootmenuimage' : 'main_telecomservice.gif',
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'509' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Кубтелеком - Кабельное ТВ',
			'image' : 'tel_ktc.gif',
			'inn_for_cheque' : '2308045181',
			'rootmenuimage' : 'tel_ktc.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '5',
					'name' : 'Номер договора',
					'comment' : '[b]Внимание![/b] Номер договора от "[b]1[/b]" до "[b]5[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8(861) 2-733-633',
			'dog' : '02-ПС-08 от 13.03.2008 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'510' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Ruslink',
			'image' : 'int_ruslink.gif',
			'inn_for_cheque' : '6671217789',
			'rootmenuimage' : 'int_ruslink.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : 'Номер счета',
					'comment' : '[b]Внимание![/b] Номер договора от "[b]1[/b]" до "[b]6[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495) 223-46-77',
			'dog' : 'ПС-1 от 11.08.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'520' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Линки',
			'image' : 'int_linky.gif',
			'inn_for_cheque' : '2308093851',
			'rootmenuimage' : 'int_linky.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '9',
					'name' : 'Номер договора',
					'comment' : '[b]Внимание![/b] Номер договора от "[b]1[/b]" до "[b]9[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8(861) 299-00-09',
			'dog' : 'Л01/11-07',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'524' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НСС Татарстан',
			'image' : 'mob_nss.gif',
			'inn_for_cheque' : '7710377540',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'530' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Радуга',
			'inn_for_cheque' : '7715595775',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Номер счета',
					'comment' : '[b]Внимание!!![/b] Номер счета состоит из [b]цифр[/b].'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'image' : 'int_raduga.gif',
			'rootmenuimage' : 'int_raduga.gif',
			'name_for_cheque' : '8(800)100-10-13',
			'dog' : '168/ДФ/09 от 23.07.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'531' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Цезарь Сателлит',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'klava' : 'lat',
					'name' : 'Номер счета',
					'comment' : '[b]Внимание!!![/b] Номер счета может состоять из [b]цифр[/b], [b]заглавных[/b] и [b]маленьких[/b] [b]латинских[/b] букв.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'image' : 'ohr_tsezar.gif',
			'rootmenuimage' : 'ohr_tsezar.gif',
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'532' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Цезарь Сателлит Спб',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'klava' : 'lat',
					'name' : 'Номер счета',
					'comment' : '[b]Внимание!!![/b] Номер счета может состоять из [b]цифр[/b], [b]заглавных[/b] и [b]маленьких[/b] [b]латинских[/b] букв.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'image' : 'ohr_tsezar_spb.gif',
			'rootmenuimage' : 'ohr_tsezar_spb.gif',
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'536' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Oriflame',
			'image' : 'ohr_orif.png',
			'inn_for_cheque' : '7704270172',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '5',
					'maxlength' : '8',
					'name' : 'Регистрационный номер',
					'comment' : '[b]Внимание![/b] Регистрационный номер от"[b]5[/b]" до "[b]7[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'537' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Simtravel',
			'image' : 'simtravel.gif',
			'inn_for_cheque' : '7732502266',
			'limit' : {
				'min' : '10',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер карты',
					'mask' : '372********',
					'comment' : '[b]Внимание![/b] Номер карты"[b]11[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'538' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'КраснодарГОРГАЗ',
			'inn_for_cheque' : '2309074812',
			'image' : 'zkh_gaz.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : 'Начальное значение счетчика',
					'mask' : '******'
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : 'Конечное значение счетчика',
					'mask' : '******'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'539' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "ГУК - КРАСНОДАР"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц за который производится оплата. Например 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'541' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ОАО "Мусороуборочная компания" г.Краснодар',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'544' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТСЖ УРОЖАЙ-2000 на р/с ...0013',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'ps_comission' : '1%',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'545' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МУ РЭП №32',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц за который производится оплата. Например 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'582' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Комтел',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '11',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				},
				'104' : {
					'id' : '104',
					'type' : 'enum',
					'name' : 'Выберите тип платежа',
					'enum' : '',
					'enum' : {
						'662' : 'Абонплата',
						'663' : 'Внутризонная связь (услуги Ростелеком)',
						'664' : 'Международная, Междугородная связь(РТК)',
						'665' : 'Интернет'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'589' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "Территория Комфорта"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц за который производится оплата. Например 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'689' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "ЖК Территория комфорта"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц за который производится оплата. Например 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'590' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "Территория Комфорта ПЛЮС"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц за который производится оплата. Например 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'591' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "Эллис-Кубань"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц за который производится оплата. Например 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'592' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТСЖ УРОЖАЙ-2000 на р/с ...0014',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'ps_comission' : '1%',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'593' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '"Юбилейное-11" ("Куб. унив. банк")',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'594' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '"Юбилейное-11" ("Кубань Кредит")',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'595' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МУП "ЕДИНЫЙ ИРЦ Г.ТУАПСЕ"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'596' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МПП Г.АРМАВИРА "ЖИЛХОЗ"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'597' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МП "По сод. и обсл. жилого фонда"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'599' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ст.Кавказская МУП "Тепловод. КАЗАНСКИЙ"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'600' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МУП "Объединенные котельн. и тепл. сети"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'601' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата за вывоз мусор - МП "Чистый город"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'603' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Услуги ООО "Зори Кубани" (г.Краснодар)',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '11',
					'name' : 'Номер лицевого счета или PAN',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131313' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'МУП ЦРКиАДО г. Горячий Ключ',
			'image' : 'zkh.gif',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : 'Номер счета',
					'mask' : '******'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/Владелец: ([^<]*)/#]',
						'description' : 'Владелец'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/Сумма к оплате: ([^<]*)/#]',
						'description' : 'Cумма к оплате'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'inn_for_cheque' : '2305024465',
			'name_for_cheque' : '(86159) 3-66-44',
			'dog' : '1/11, 2/11 от 18.03.11г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '2%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'631' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Галактика знакомств',
			'image' : 'ohr_gal.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '50',
				'max' : '6000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Идентификатор персонажа',
					'mask' : '***************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'inn_for_cheque' : '2466122079',
			'name_for_cheque' : 'mobstudio@mobstudio.ru',
			'dog' : '05/ГЗ от 21.07.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'632' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Faberlic',
			'image' : 'ohr_faber.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '15',
					'name' : 'Номер покупателя',
					'mask' : '********************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'634' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'GLOBALSIM - HBSGlobal',
			'image' : 'mob_hbs.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '100',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '***********',
					'comment' : '[b]Внимание![/b] Номер телефона "[b]11[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'635' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Mamba',
			'image' : 'ohr_mamba.gif',
			'inn_for_cheque' : '7702316826',
			'rootmenuimage' : 'main_novotelecom.gif',
			'limit' : {
				'min' : '105',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Логин'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'636' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ВКонтакте.ру',
			'image' : 'ohr_vkont.gif',
			'rootmenuimage' : 'main_novotelecom.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '12',
					'name' : 'Номер ID в системе',
					'mask' : '************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'638' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'БиЛайн WiFi',
			'image' : 'int_bee.gif',
			'inn_for_cheque' : '7713076301',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : 'Д182/2 от 01.07.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'639' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'БиЛайн Интернет',
			'image' : 'int_bee.gif',
			'inn_for_cheque' : '7713076301',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер договора',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : 'Д182/2 от 01.07.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'641' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Косметика EdelStar (поплнение счета)',
			'image' : 'ohr_edel.gif',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '6000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Номер ID в системе',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'651' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'БиЛайн ТВ',
			'image' : 'tv_bee.gif',
			'inn_for_cheque' : '7713076301',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер договора',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : 'Д182/2 от 01.07.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'652' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'БиЛайн Мобильный платеж',
			'image' : 'mob_beeline.gif',
			'inn_for_cheque' : '7713076301',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '4990'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : 'Д182/2 от 01.07.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'654' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МТС без комиссии',
			'inn_for_cheque' : '7740000076',
			'image' : 'mob_mts_espp.gif',
			'rootmenuimage' : 'main_mts.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0890',
			'dog' : '2/ПЦ1/04.06 от 14.04.2006 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'655' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'БиЛайн без комиссии',
			'image' : 'mob_beeline.gif',
			'inn_for_cheque' : '7713076301',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : 'Д182/2 от 01.07.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'656' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Мегафон без комиссии',
			'comment' : 'код + прямые городские',
			'image' : 'mob_megafon.gif',
			'inn_for_cheque' : '2308071777',
			'rootmenuimage' : 'main_megafon.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0500',
			'dog' : 'П-2006-19 от 15.05.2006 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'657' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Теле 2 без комиссии',
			'image' : 'mob_tele2.gif',
			'inn_for_cheque' : '6163025500',
			'rootmenuimage' : 'main_tele2.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '611',
			'dog' : 'ОПП 12/1, ОПП 12/2, ОПП 12/3, ОПП 12/4, ОПП 12/5, ОПП 12/6, ОПП 12/7, ОПП 12/8, ОПП 12/9, ОПП 12/10, ОПП 12/11, ОПП 12/12, ОПП 12/13, ОПП 12/14, ОПП 12/15, ОПП 12/16, ОПП 12/17, ОПП 12/18, ОПП 12/19, ОПП 12/20, ОПП 12/21, ОПП 12/22, ОПП 12/23, ОПП 12/24,',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'667' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ГудЛайн',
			'inn_for_cheque' : '7728513674',
			'image' : 'mob_goodline.gif',
			'limit' : {
				'min' : '50',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'maxlength' : '12',
					'minlength' : '11',
					'type' : 'integer',
					'id' : '100',
					'name' : 'Номер телефона',
					'comment' : 'Номер телефона состоит из [b]11[/b] или [b]12[/b] цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'668' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Подключение МТС, БиЛайн, Мегафон',
			'image' : 'ohr_podkl.gif',
			'limit' : {
				'min' : '10',
				'max' : '180'
			},
			'fields' : {
				'100' : {
					'maxlength' : '10',
					'minlength' : '0',
					'type' : 'integer',
					'id' : '100',
					'name' : 'Номер телефона',
					'comment' : 'Номер телефона состоит из [b]11[/b] или [b]12[/b] цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'669' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Подключение Теле2',
			'image' : 'mob_tele2.gif',
			'limit' : {
				'min' : '100',
				'max' : '105'
			},
			'fields' : {
				'100' : {
					'maxlength' : '10',
					'minlength' : '0',
					'type' : 'integer',
					'id' : '100',
					'name' : 'Номер телефона',
					'comment' : 'Номер телефона состоит из [b]11[/b] или [b]12[/b] цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'name_for_cheque' : '-',
			'dog' : '-',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'671' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ГИБДД Информация о штрафах',
			'inn_for_cheque' : '2312166213',
			'image' : 'gibdd_info.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '8',
				'max' : '10'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер транспортного средства (например A000AA93).',
					'comment' : '[b]Внимание! Регионы:[/b]Краснодарский Край, Ставропольский Край, Республика Адыгея, Рязанская область, Тульская область, Воронежская область.'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : 'Номер водительского удост. (например 00AA000000).',
					'comment' : '[b]Внимание! Регионы:[/b]Краснодарский Край, Ставропольский Край, Республика Адыгея, Рязанская область, Тульская область, Воронежская область.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : ''
			},
			'name_for_cheque' : '8612340992',
			'dog' : 'ИС 06/08 от 03.08.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '2',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'673' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ГИБДД Реквизиты для оплаты штрафа',
			'inn_for_cheque' : '2312166213',
			'image' : 'gibdd_rekv.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '8',
				'max' : '10'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер постановления.',
					'comment' : '[b]Внимание! Регионы:[/b]Краснодарский Край, Ставропольский Край, Республика Адыгея, Рязанская область, Тульская область, Воронежская область.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Реквизиты для оплаты'
				},
				'show_properties' : ''
			},
			'name_for_cheque' : '8612340992',
			'dog' : 'ИС 06/08 от 03.08.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '2',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'676' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'RBK Money',
			'inn_for_cheque' : '7740000076',
			'image' : 'rbk.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '2',
				'max' : '4990'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '11',
					'minlength' : '9',
					'type' : 'text',
					'name' : 'Номер счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495)648-68-58',
			'dog' : '1062701/09 от 26.10.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'678' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Монета.RU',
			'inn_for_cheque' : '7740000076',
			'image' : 'moneta.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '1',
				'max' : '4990'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '16',
					'minlength' : '8',
					'type' : 'integer',
					'name' : 'Номер счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495)743-49-85',
			'dog' : '59 от 01.11.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'679' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Yota',
			'inn_for_cheque' : '7701725181',
			'image' : 'int_yota.gif',
			'rootmenuimage' : 'int_yota.gif',
			'limit' : {
				'min' : '10',
				'max' : '1500'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '11',
					'minlength' : '10',
					'type' : 'integer',
					'name' : 'Номер счета или телефона',
					'mask' : '***********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 800 700-55-00',
			'dog' : '2-04/12-09-С от 04.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'684' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'КубаньЭнергоСбыт',
			'image' : 'zkh_ke.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '19',
				'max' : '5000'
			},
			'fields' : {
				'103' : {
					'id' : '103',
					'type' : 'enum',
					'name' : 'За что платить',
					'enum' : '',
					'enum' : {
						'SERVICE' : 'Оплата за электроэнергию',
						'PENY' : 'Оплата штрафов и пени'
					}
				},
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Лицевой счет',
					'comment' : 'Введите лицевой счет.'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер извещения',
					'comment' : 'Введите номер извещения.'
				},
				'102' : {
					'id' : '102',
					'maxlength' : '10',
					'minlength' : '0',
					'type' : 'integer',
					'name' : 'Текущее значение счетчика',
					'comment' : 'Введите текущее значение счетчика'
				},
				'104' : {
					'id' : '104',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'dog' : '2010-1 от 10.02.2010 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1000' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ОАО "Альфа-Банк"',
			'image' : 'bnk_alfa.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '9',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Лицевой счет',
					'mask' : '********************',
					'comment' : '[b]Внимание! Лицевой счет 20 цифр.[/b]'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1001' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Поиск банка по БИК',
			'image' : 'bnk.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '9',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1002' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ОАО "Альфа-Банк"',
			'image' : 'bnk_alfa.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '9',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер карты',
					'mask' : '****************',
					'comment' : '[b]Внимание! Номер карты 16 цифр.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Срок действия в формате ГГММ',
					'mask' : '****',
					'comment' : 'Срок действия карты в формате ГГММ'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1003' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "ХКФ БАНК"',
			'image' : 'bnk_hkf.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '9',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Лицевой счет',
					'mask' : '********************',
					'comment' : '[b]Внимание! Лицевой счет 20 цифр.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '15',
					'name' : 'Номер кредитного договора',
					'comment' : 'Введите номер кредитного договора'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : 'Фамилия, имя и отчество заемщика',
					'comment' : 'Фамилия, имя и отчество заемщика'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Фамилия, имя и отчество плательщика',
					'comment' : 'Фамилия, имя и отчество плательщика'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1004' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ОАО "ОТП Банк"',
			'image' : 'bnk_otp.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '9',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Лицевой счет',
					'mask' : '********************',
					'comment' : '[b]Внимание! Лицевой счет 20 цифр.[/b]'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : 'Фамилия, имя и отчество заемщика',
					'comment' : 'Фамилия, имя и отчество заемщика'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Фамилия, имя и отчество плательщика',
					'comment' : 'Фамилия, имя и отчество плательщика'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1005' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Русский стандарт',
			'image' : 'bnk_russtand.gif',
			'rootmenuimage' : '',
			'name_for_cheque' : '8 (800) 100-100-8',
			'limit' : {
				'min' : '9',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).[br]'
				},
				'101' : {
					'id' : '101',
					'type' : 'enum',
					'name' : 'Выберите тип платежа',
					'enum' : '',
					'enum' : {
						'1' : 'Оплата по номеру договора',
						'2' : 'Оплата по номеру карты',
						'3' : 'Оплата по номеру счета'
					}
				},
				'102' : {
					'id' : '102',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите номер дог. или номер карты,или номер счета',
					'comment' : '[b]Введите номер договора или номер карты, или номер счета. Внимание! Вводимое значение зависит от выбранного "типа платежа"![/b][br]'
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b].[br]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '2000',
					'value' : '1,5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '3%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1006' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЮниКредит Банк',
			'image' : 'bnk_unikred.gif',
			'rootmenuimage' : '',
			'name_for_cheque' : '8 (800) 100-100-8',
			'limit' : {
				'min' : '9',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).[br]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '********************',
					'comment' : '[b]Внимание! Лицевой счет 20 цифр.[/b][br]'
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b].[br]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1007' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Выбор банка',
			'image' : 'bnk.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '9',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'БИК Банка',
					'comment' : 'Введите БИК Банка (указан на квитанции).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Лицевой счет',
					'mask' : '********************',
					'comment' : '[b]Внимание! Лицевой счет 20 цифр.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : 'Номер кредитного договора',
					'comment' : 'Введите номер кредитного договора'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : 'Номер телефона вводится без [b]8[/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : 'Фамилия, имя и отчество заемщика',
					'comment' : 'Фамилия, имя и отчество заемщика'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Фамилия, имя и отчество плательщика',
					'comment' : 'Фамилия, имя и отчество плательщика'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1009' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Выбор банка',
			'image' : 'bnk.gif',
			'rootmenuimage' : 'gibdd.gif',
			'name_for_cheque' : '8 (800) 200-80-65',
			'limit' : {
				'min' : '9',
				'max' : '5000'
			},
			'fields' : {
				'110' : {
					'id' : '110',
					'type' : 'text',
					'name' : 'Фамилия Имя Отчество Заемщика'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'dog' : '37/3360 от 11.12.2009 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '30',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '3000',
					'value' : '1%',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'687' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Радуга ТВ',
			'inn_for_cheque' : '7715595775',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '11',
					'name' : 'Номер счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'image' : 'tv_raduga.gif',
			'rootmenuimage' : 'int_raduga.gif',
			'name_for_cheque' : '8(800)444-91-00',
			'dog' : '168/ДФ/09 от 23.07.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'706' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'СкайЛинк Ростов на Дону',
			'image' : 'mob_skylink.gif',
			'inn_for_cheque' : '7740000012',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1010' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ГИБДД оплата штрафов',
			'image' : 'gibdd.gif',
			'inn_for_cheque' : '7710377540',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '50',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер постановления',
					'comment' : '[b]Например 00АА000000[/b].'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Дата документа',
					'mask' : '**.**.****',
					'comment' : ''
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'ОКАТО подразделения ГИБДД',
					'mask' : '***********',
					'comment' : ''
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : 'ИНН подразделения',
					'mask' : '**********',
					'comment' : ''
				},
				'104' : {
					'id' : '104',
					'type' : 'masked',
					'name' : 'КБК подразделения',
					'mask' : '********************',
					'comment' : ''
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Имя и Отчество плательщика',
					'comment' : ''
				},
				'107' : {
					'id' : '107',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'comment' : ''
				},
				'108' : {
					'id' : '108',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1999' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ГИБДД оплата штрафов',
			'image' : 'gibdd.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'110' : {
					'id' : '110',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'mask' : '8 (***) ***-****',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'713' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'КОНТИНЕНТ ТВ',
			'image' : 'tel_kont.gif',
			'inn_for_cheque' : '7710582109',
			'rootmenuimage' : 'tel_cont.gif',
			'limit' : {
				'min' : '10',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '11',
					'maxlength' : '12',
					'name' : 'Номер карточки',
					'comment' : '[b]Внимание![/b] Номер карточки "[b]11[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-200-6',
			'dog' : 'ОД -1/12/09 от 15.12.2009',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'711' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТСЖ "Бриз"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета.',
					'mask' : '************'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8[/b].'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : 'Имя и Отчество плательщика',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '15',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'712' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Новтек',
			'image' : 'int_novt.gif',
			'inn_for_cheque' : '2308070773',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Л/С абонента. Например: 00-A0-0000',
					'comment' : '[b]В номере л/с вместо латинской A допустимы символы: F,T,V.[/b]".'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (861) 275-27-27',
			'dog' : '01 от 28.07.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'730' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Триколор ТВ Личный счет',
			'image' : 'tel_tricolor_ls.gif',
			'inn_for_cheque' : '7733547365',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '12',
					'maxlength' : '14',
					'name' : 'Введите номер Абонентского договора или приемника',
					'comment' : '[b]Внимание![/b] Номер "[b]12[/b]" или "[b]14[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 от 01.11.2009 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'731' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Триколор ТВ Пакет Оптимум',
			'image' : 'tel_tricolor_opt.gif',
			'inn_for_cheque' : '7733547365',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '12',
					'maxlength' : '14',
					'name' : 'Введите номер Абонентского договора или приемника',
					'comment' : '[b]Внимание![/b] Номер "[b]12[/b]" или "[b]14[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 от 01.11.2009 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'732' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Триколор ТВ Пакет Ночной',
			'image' : 'tel_tricolor_ngt.gif',
			'inn_for_cheque' : '7733547365',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '12',
					'maxlength' : '14',
					'name' : 'Введите номер Абонентского договора или приемника',
					'comment' : '[b]Внимание![/b] Номер "[b]12[/b]" или "[b]14[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 от 01.11.2009 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'733' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЦентрТелеком',
			'image' : 'int_centertelekom.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '12',
					'name' : 'Номер телефона или л/с',
					'mask' : '****************',
					'comment' : 'Введите номер'
				},
				'104' : {
					'id' : '104',
					'type' : 'enum',
					'name' : 'Выберите филиал',
					'enum' : '',
					'enum' : {
						'1667' : 'Ивановский',
						'1668' : 'Костромской',
						'1669' : 'Ярославский'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'734' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЦентрТелеком услуги МТТ',
			'image' : 'int_centertelekom.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '12',
					'name' : 'Номер телефона или л/с',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'735' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЦентрТелеком услуги Ростелеком',
			'image' : 'int_centertelekom.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '12',
					'name' : 'Номер телефона или л/с',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'736' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЦентрТелеком',
			'image' : 'int_centertelekom.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '12',
					'name' : 'Номер телефона или л/с',
					'mask' : '****************',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'737' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЦентрТелеком услуги МТТ',
			'image' : 'int_centertelekom.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '12',
					'name' : 'Номер телефона или л/с',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'738' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЦентрТелеком услуги Ростелеком',
			'image' : 'int_centertelekom.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '12',
					'name' : 'Номер телефона или л/с',
					'mask' : '****************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'739' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МежРегионГАЗ',
			'image' : 'zkh_gaz.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '5',
					'maxlength' : '12',
					'name' : 'Номер лицевого счета',
					'comment' : 'Введите номер лицевого счета'
				},
				'101' : {
					'id' : '101',
					'type' : 'enum',
					'name' : 'Выберите регион',
					'enum' : '',
					'enum' : {
						'9' : 'Краснодарский Край',
						'33' : 'Костромская область',
						'24' : 'Курская область'
					}
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : 'Значение счетчика',
					'mask' : '******'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'740' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '(Ё) Саратов, Татарстан',
			'image' : 'tel_e.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8(***)***-**-**',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'741' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Просто для общения. Москва',
			'image' : 'mob_prosto.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8(***)***-**-**',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'742' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Спарк',
			'image' : 'int_spark.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер счета',
					'mask' : '8(***)***-**-**',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'743' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Ru-Center',
			'image' : 'int_rucenter.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер договора',
					'mask' : '8(***)***-**-**',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'744' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Энфорта',
			'image' : 'int_enforta.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета',
					'mask' : '8(***)***-**-**',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'745' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Enter',
			'image' : 'int_enter.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер лицевого счета',
					'mask' : '8(***)***-**-**',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'747' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Sipnet',
			'image' : 'int_sipnet.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'SIP-номер',
					'mask' : '8(***)***-**-**',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'748' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '2pay.ru',
			'image' : '2pay.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Номер счета',
					'mask' : '****************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'751' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НСС Пензенская область',
			'image' : 'mob_nss.gif',
			'inn_for_cheque' : '5260053878',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'752' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НСС Республика Мордовия',
			'image' : 'mob_nss.gif',
			'inn_for_cheque' : '5260053878',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'753' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НСС Саратовская область',
			'image' : 'mob_nss.gif',
			'inn_for_cheque' : '5260053878',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'754' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НСС Чувашия',
			'image' : 'mob_nss.gif',
			'inn_for_cheque' : '5260053878',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1687' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси "Ракета"',
			'image' : 'raketa.gif',
			'rootmenuimage' : 'gibdd.gif',
			'limit' : {
				'min' : '9',
				'max' : '14000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '3',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Лицевой счет',
					'comment' : 'Введите лицевой счет.'
				}
			},
			'processor' : {
				'type' : 'external',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1688' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси "Кавказ"',
			'image' : '',
			'rootmenuimage' : 'ohr_kavkaz.gif',
			'limit' : {
				'min' : '9',
				'max' : '14000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '3',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Лицевой счет',
					'comment' : 'Введите лицевой счет.'
				}
			},
			'processor' : {
				'type' : 'external',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'757' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'APOLLOPHONE',
			'image' : 'int_apollophone.gif',
			'inn_for_cheque' : '7715398216',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер договора или пин код карточки.',
					'comment' : '[b]Внимание![/b] Карточка: вводиться только pin код, Договор: только номер договора.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (812) 643-10-20',
			'dog' : '18 от 01.10.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'758' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Puzzle',
			'image' : 'int_puzzle.gif',
			'inn_for_cheque' : '5260053878',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер л/с',
					'mask' : '*****',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'759' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Domolink',
			'image' : 'int_domolink.gif',
			'inn_for_cheque' : '5260053878',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '10',
					'maxlength' : '12',
					'name' : 'Номер л/с',
					'mask' : '************',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'760' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '"ТелеБум" Интернет',
			'image' : 'int_telebum.gif',
			'inn_for_cheque' : '2312142357',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер договора'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 266-82-13',
			'dog' : '02/11 от 02 ноября 2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'761' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '"ТелеБум" Кабельное ТВ',
			'image' : 'int_telebum.gif',
			'inn_for_cheque' : '2312142357',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер договора'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 266-82-13',
			'dog' : '02/11 от 02 ноября 2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'765' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Сфера:Перерождение',
			'image' : 'nik_sfre.gif',
			'inn_for_cheque' : '11111',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'766' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Сфера',
			'image' : 'nik_sf.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'767' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Webracing',
			'image' : 'nik_webr.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'768' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Сфера II Арена',
			'image' : 'nik_sf2.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'769' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Фантазиум',
			'image' : 'nik_fant.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'770' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Rappelz',
			'image' : 'nik_rapp.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'771' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Повелители Драконов',
			'image' : 'nik_drag.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'772' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Дом 3',
			'image' : 'nik_dom3.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'773' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'GameXP',
			'image' : 'nik_gamexp.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'774' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '4Story',
			'image' : 'nik_stro.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '772451900111',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'775' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'KarosOnline',
			'image' : 'nik_kar.gif',
			'inn_for_cheque' : '7724519001',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой ID от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Вы можете узнать свой ID отправив SMS с текстом GXP Ваш_логин на номер 1231. Подробнее на www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : 'ПС 101021-КМ 03 от 21.10.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'776' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси "Союз"',
			'image' : 'ohr_taxi.gif',
			'ps_comission' : '10%',
			'inn_for_cheque' : '2310141830',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '9',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Введите свой Позывной от 1 до 9 цифр',
					'mask' : '8 (***) ***-**-**'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Введите контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(861)252-33-06',
			'dog' : '02/15 от 15.11.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'778' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Транспортная Карта',
			'image' : 'ohr_tc.gif',
			'inn_for_cheque' : '2310141830',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер Карты',
					'comment' : '[b]Внимание! Номер вводится без 8.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8.[/b]'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '2',
					'maxlength' : '3',
					'name' : 'Номинал'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : 'ТК-101217 от 17.12.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'781' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Кубител',
			'image' : 'int_kubitel.gif',
			'inn_for_cheque' : '2308169797',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '8',
					'minlength' : '8',
					'type' : 'integer',
					'name' : 'Номер лицевого счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 299-20-21',
			'dog' : '07/12 от 07.12.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'783' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Xsolla',
			'image' : 'xsl.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '9',
					'name' : 'Номер счета',
					'mask' : '****************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'784' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'World of Tanks',
			'image' : 'xsl_tanks.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'785' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Perfect World',
			'image' : 'xsl_perfect.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Аккаунт. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'786' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Tanki Online',
			'image' : 'xsl_tanki.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Игровой идентификатор. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'787' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Легенда Фэо-прайм',
			'image' : 'xsl_legend_prim.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'788' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Герои войны и денег',
			'image' : 'xsl_hero.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Имя персонажа'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'789' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Легенда Фэо-минор',
			'image' : 'xsl_legend.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'790' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '11х11 футбольный менеджер',
			'image' : 'xsl_11.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'791' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Легенда Фэо-мединат',
			'image' : 'xsl_legend_med.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'792' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Ганджубасовые войны',
			'image' : 'xsl_ganja.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'793' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Троецарствие',
			'image' : 'xsl_troec.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'794' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Королевство',
			'image' : 'xsl_korol.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Номер счета. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'795' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Аллоды Онлайн',
			'image' : 'xsl_allod.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Укажите Аккаунт. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'796' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Carnage',
			'image' : 'xsl_garnage.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '18',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Номер счета. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'797' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Lava-Online',
			'image' : 'xsl_lava.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Номер ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'798' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'U.N.I.T.',
			'image' : 'xsl_unit.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Номер Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'799' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'TimeZero Prima',
			'image' : 'xsl_time.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Номер Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'800' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'NeverLands',
			'image' : 'xsl_neverlands.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Номер Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'801' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Гладиаторы',
			'image' : 'xsl_glad.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Номер Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'802' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Грани реальности',
			'image' : 'xsl_real.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Номер Ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'803' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Дозоры',
			'image' : 'xsl_dozor.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '22',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'804' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Садовая империя',
			'image' : 'xsl_sad.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '14',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'805' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Haddan',
			'image' : 'xsl_haddan.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '14',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'806' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Пути истории',
			'image' : 'xsl_putist.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '9',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'807' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Моя деревня',
			'image' : 'xsl_derev.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'808' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Осада Онлайн',
			'image' : 'xsl_osada.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'809' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Overkings',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'810' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Sky2Fly',
			'image' : 'xsl_sky.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'811' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Джаггернаут',
			'image' : 'xsl_dgager.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'812' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Bloody World',
			'image' : 'xsl_blood.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'813' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'BananaWars',
			'image' : 'xsl_banan.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Идентификатор',
					'mask' : '****************',
					'comment' : 'Введите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'815' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Yota.Money',
			'inn_for_cheque' : '7701725181',
			'image' : 'ohr_yotam.gif',
			'rootmenuimage' : 'int_yota.gif',
			'limit' : {
				'min' : '10',
				'max' : '1500'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '11',
					'minlength' : '10',
					'type' : 'integer',
					'name' : 'Номер счета или телефона',
					'mask' : '***********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 800 700-55-00',
			'dog' : '2-04/12-09-С от 04.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'816' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Yota',
			'inn_for_cheque' : '7701725181',
			'image' : 'int_yota.gif',
			'rootmenuimage' : 'int_yota.gif',
			'limit' : {
				'min' : '10',
				'max' : '1500'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Введите номер телефона абонента',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Вы производите оплату услуг ООО «Скартел» (Yota). Введите номер телефона абонента[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 800 700-55-00',
			'dog' : '2-04/12-09-С от 04.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'817' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Кубань-Телеком',
			'inn_for_cheque' : '2312138618',
			'image' : 'int_kubtel.gif',
			'rootmenuimage' : 'int_yota.gif',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '4',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер счета',
					'mask' : '***********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 200-10-11',
			'dog' : '24/01 от 24.01.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'818' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Сеть ТАЙГЕТ',
			'inn_for_cheque' : '2322028036',
			'image' : 'int_taiget.gif',
			'rootmenuimage' : 'int_yota.gif',
			'limit' : {
				'min' : '50',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер Договора',
					'mask' : 'фл-*****'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : 'support@taiget.ru',
			'dog' : 'Ф101122 от 22.11.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'819' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Цифровой Городъ',
			'inn_for_cheque' : '2308123496',
			'image' : 'int_cifr.gif',
			'rootmenuimage' : 'int_yota.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите Логин'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 255-37-98',
			'dog' : '16/03 от 16.03.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'820' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТСЖ "Наш Дом"',
			'image' : 'zkh.gif',
			'inn_for_cheque' : '2311112462',
			'rootmenuimage' : '1.jpg',
			'ps_comission' : '1%',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '16',
					'name' : 'Лицевой счет',
					'mask' : '****************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '(861) 220-76-73',
			'dog' : '15/03 от 15.03.11г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '2%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'821' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Триколор ТВ Пакет "Наш Футбол"',
			'image' : 'tel_tricolor_f.gif',
			'inn_for_cheque' : '7733547365',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '12',
					'maxlength' : '14',
					'name' : 'Введите номер Абонентского договора или приемника',
					'comment' : '[b]Внимание![/b] Номер "[b]12[/b]" или "[b]14[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 от 01.11.2009 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'823' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МедиаГранд',
			'image' : 'int_mediag.gif',
			'inn_for_cheque' : '0105041847',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '**-*****-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(8722) 57-06-05',
			'dog' : '05/11 от 05.05.11',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'824' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ОргТехСервис',
			'image' : 'int_orgtec.gif',
			'inn_for_cheque' : '0105052856',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите логин'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(8772) 56-36-68',
			'dog' : '15/04 от 20.04.11',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'825' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси Сатурн',
			'image' : 'ohr_saturn.gif',
			'inn_for_cheque' : '2311078123',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '***********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 257-07-72',
			'dog' : '18/11 от 18.08.2011',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'827' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Родительский Взнос',
			'image' : 'ohr_detsad.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'ps_comission' : '2%',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер лицевого счета',
					'mask' : '****************',
					'comment' : ''
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-800-3',
			'dog' : '№230/ДС от 12.12.2011г.,№183/ДС от 13.12.2011г.,№191/ДС от 26.12.2011г.,№197/ДС от 13.12.2011г.,№93/ДС от 15.12.2011г. ,№1/ДС от 20.12.2011 г. ,№113/ДС от 26.12.2011г.,№132/ДС от 22.12.2011г.,№213/ДС от 26.12.2011г.,№106/ДС от20.12.2011г. ,№109/ДС от 20.12.2011г.,№111/ДС от 01.12.2011г.,№112/ДС от20.12.2011г. ,№116/ДС от 20.12.2011г.,№138/ДС от1.12.2011 г. ,№15/ДС от 20.12.2011 г.,№16/ДС от 27.01.2012г.,№162/ДС от 20.12.2011г.,№163/ДС от 20.12.2011г.,№167/ДС от 01.12.2011г.,№17/ДС от 20.12.2011г.,№179/ДС от 01.12.2011г.,№18/ДС от 1.12.2011г.,№184/ДС от 01.12.2011г.,№190/ДС от 26.12.2011г.,№195/ДС от1.12.2011 г. ,№2/ДС от 20.12.2011г. ,№20/ДС от 20.12.2011г. ,№205/ДС от 20.12.2011г.,№206/ДС от 20.12.2011г.,№211/ДС от 20.12.2011г.,№215/ДСот20.12.2011 г. ,№219/ДС от 20.12.2011г.,№220/ДС от 20.12.2011г.,№222/ДС от 20.12.2011г.,№223/ДС от 20.12.2011г.,№224/ДС от 20.12.2011г.,№225/ДСот26.12.2011 г. ,№226/ДС от 19.12.2012г.,№227/ДС от 19.12.2011г.,№234/ДС от 01.12.2011г.,№26/ДС от27.01.2012 г. ,№3/ДС от 1.12.2011 г. ,№33/ДС от19.12.2011 г. ,№34/ДС от 20.12.2011г.,№35/ДС от 20.12.2011г. ,№36/ДС от 20.12.2011г. ,№38/ДС от 27.01.2012г.,№41/ДС от 20.12.2011г. ,№43/ДС от 20.12.2011г. ,№48/ДС от 22.12.2011г. ,№50/ДС от20.12.2011 г. ,№53/ДС от 26.12.2011г.,№54/ДС от 20.12.2011г. ,№55/ДС от20.12.2011 г. ,№57/ДС от20.12.2011 г. ,№60/ДС от 27.01.2012г.,№61/ДС от27.01.2012 г. ,№66/ДС от1.12.2011 г. ,№7/ДС от 20.12.2011г.,№75/ДС от 20.12.2011г. ,№79/ДС от 20.12.2011г. ,№85/ДС от 20.12.2011г. ,№88/ДС от 20.12.2011г. ,№91/ДС от 20.12.2011г. ,№97/ДС от 20.12.2011г.,№99/ДС от 20.12.2011г.,№161/ДС от 17.01.2012г.,№5/ДС от 20.12.2011г.,№68/ДС от 20.12.2011г.,№101/ДС от20.12.2011г. ,№115/ДС от 22.12.2011г.,№131/ДС от 01.12.2011г.,№23/ДС от 20.12.2011г.,№135/ДС от 12.12.2011г.,№164/ДС от 17.01.2012г.,№31/ДС от 29.11.2011г.,№39/ДС от 22.12.2011г.,№84/ДС от 22.12.2011г. ,№92/ДС от 26.12.2011г. ,№124/ДС от 29.12.2011г.,№139/ДС от 29.12.2011г.,№168/ДС от 20.12.2011г.,№169/ДС от 26.12.2011г.,№228/ДС от 20.12.2011г.,№70/ДС от 29.12.2011г. ,№173/ДС от 19.12.2011г.,№232/ДС от 20.12.2011г.,№137/ДСот20.12.2011 г. ,№145/ДС от 01.12.2011г.,№146/ДС от 06.12.2011г.,№147/ДС от 01.12.2011г.,№149/ДС от 08.12.2011г.,№150/ДС от 08.12.2011г.,№151/ДС от 01.12.2011г.,№152/ДС от 06.12.2011г.,№154/ДС от 08.12.2011г.,№155/ДС от 06.12.2011г.,№156/ДС от 08.12.2011г.,№158/ДС от 06.12.2011г.,№188/ДС от 20.12.2011г.,№25/ДС от 20.12.2011г. ,№76/ДС от 26.12.2011г.,№82/ДС от 26.12.2011г. ,№87/ДС от 20.12.2011 г.,№94/ДС от 20.12.2011г. ,№231/ДС от 06.09.2011г.,№143/ДС от 01.12.2011г.,№140/ДС от 01.12.2011г.,№72/ДС от 20.12.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'828' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата дополнительных услуг',
			'image' : 'ohr_detsad.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'ps_comission' : '2%',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер лицевого счета',
					'mask' : '****************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-800-3',
			'dog' : '№230/ДС от 12.12.2011г.,№183/ДС от 13.12.2011г.,№191/ДС от 26.12.2011г.,№197/ДС от 13.12.2011г.,№93/ДС от 15.12.2011г. ,№1/ДС от 20.12.2011 г. ,№113/ДС от 26.12.2011г.,№132/ДС от 22.12.2011г.,№213/ДС от 26.12.2011г.,№106/ДС от20.12.2011г. ,№109/ДС от 20.12.2011г.,№111/ДС от 01.12.2011г.,№112/ДС от20.12.2011г. ,№116/ДС от 20.12.2011г.,№138/ДС от1.12.2011 г. ,№15/ДС от 20.12.2011 г.,№16/ДС от 27.01.2012г.,№162/ДС от 20.12.2011г.,№163/ДС от 20.12.2011г.,№167/ДС от 01.12.2011г.,№17/ДС от 20.12.2011г.,№179/ДС от 01.12.2011г.,№18/ДС от 1.12.2011г.,№184/ДС от 01.12.2011г.,№190/ДС от 26.12.2011г.,№195/ДС от1.12.2011 г. ,№2/ДС от 20.12.2011г. ,№20/ДС от 20.12.2011г. ,№205/ДС от 20.12.2011г.,№206/ДС от 20.12.2011г.,№211/ДС от 20.12.2011г.,№215/ДСот20.12.2011 г. ,№219/ДС от 20.12.2011г.,№220/ДС от 20.12.2011г.,№222/ДС от 20.12.2011г.,№223/ДС от 20.12.2011г.,№224/ДС от 20.12.2011г.,№225/ДСот26.12.2011 г. ,№226/ДС от 19.12.2012г.,№227/ДС от 19.12.2011г.,№234/ДС от 01.12.2011г.,№26/ДС от27.01.2012 г. ,№3/ДС от 1.12.2011 г. ,№33/ДС от19.12.2011 г. ,№34/ДС от 20.12.2011г.,№35/ДС от 20.12.2011г. ,№36/ДС от 20.12.2011г. ,№38/ДС от 27.01.2012г.,№41/ДС от 20.12.2011г. ,№43/ДС от 20.12.2011г. ,№48/ДС от 22.12.2011г. ,№50/ДС от20.12.2011 г. ,№53/ДС от 26.12.2011г.,№54/ДС от 20.12.2011г. ,№55/ДС от20.12.2011 г. ,№57/ДС от20.12.2011 г. ,№60/ДС от 27.01.2012г.,№61/ДС от27.01.2012 г. ,№66/ДС от1.12.2011 г. ,№7/ДС от 20.12.2011г.,№75/ДС от 20.12.2011г. ,№79/ДС от 20.12.2011г. ,№85/ДС от 20.12.2011г. ,№88/ДС от 20.12.2011г. ,№91/ДС от 20.12.2011г. ,№97/ДС от 20.12.2011г.,№99/ДС от 20.12.2011г.,№161/ДС от 17.01.2012г.,№5/ДС от 20.12.2011г.,№68/ДС от 20.12.2011г.,№101/ДС от20.12.2011г. ,№115/ДС от 22.12.2011г.,№131/ДС от 01.12.2011г.,№23/ДС от 20.12.2011г.,№135/ДС от 12.12.2011г.,№164/ДС от 17.01.2012г.,№31/ДС от 29.11.2011г.,№39/ДС от 22.12.2011г.,№84/ДС от 22.12.2011г. ,№92/ДС от 26.12.2011г. ,№124/ДС от 29.12.2011г.,№139/ДС от 29.12.2011г.,№168/ДС от 20.12.2011г.,№169/ДС от 26.12.2011г.,№228/ДС от 20.12.2011г.,№70/ДС от 29.12.2011г. ,№173/ДС от 19.12.2011г.,№232/ДС от 20.12.2011г.,№137/ДСот20.12.2011 г. ,№145/ДС от 01.12.2011г.,№146/ДС от 06.12.2011г.,№147/ДС от 01.12.2011г.,№149/ДС от 08.12.2011г.,№150/ДС от 08.12.2011г.,№151/ДС от 01.12.2011г.,№152/ДС от 06.12.2011г.,№154/ДС от 08.12.2011г.,№155/ДС от 06.12.2011г.,№156/ДС от 08.12.2011г.,№158/ДС от 06.12.2011г.,№188/ДС от 20.12.2011г.,№25/ДС от 20.12.2011г. ,№76/ДС от 26.12.2011г.,№82/ДС от 26.12.2011г. ,№87/ДС от 20.12.2011 г.,№94/ДС от 20.12.2011г. ,№231/ДС от 06.09.2011г.,№143/ДС от 01.12.2011г.,№140/ДС от 01.12.2011г.,№72/ДС от 20.12.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'829' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Exist',
			'image' : 'ohr_exist.gif',
			'inn_for_cheque' : '230803865493',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '14',
					'minlength' : '14',
					'type' : 'masked',
					'name' : 'Номер лицевого счета',
					'mask' : '**************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : 'Контактный телефон плательщика',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8  (861) 200-10-00',
			'dog' : '16/09 от 20.09.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'830' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Exist (ИП Коломиец П.Д.)',
			'image' : 'ohr_exist.gif',
			'inn_for_cheque' : '230803865493',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '14',
					'minlength' : '14',
					'type' : 'masked',
					'name' : 'Номер лицевого счета',
					'mask' : '**************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : 'Контактный телефон плательщика',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8  (861) 200-10-00',
			'dog' : '16/09 от 20.09.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'831' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Exist (ИП Пушкарев В.В.)',
			'image' : 'ohr_exist.gif',
			'inn_for_cheque' : '231702328328',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '14',
					'minlength' : '14',
					'type' : 'masked',
					'name' : 'Номер лицевого счета',
					'mask' : '**************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : 'Контактный телефон плательщика',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8  (862) 955-885',
			'dog' : '1 от 28.10.2011',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'832' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'World of Batles',
			'image' : 'xsl_wbat.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Имя пользвателя',
					'mask' : '****************',
					'comment' : 'Введите имя пользвателя. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'833' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Steam',
			'image' : 'xsl_steam.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Steam ID',
					'mask' : '****************',
					'comment' : 'Введите Steam ID или email. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'834' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Playtox',
			'image' : 'xsl_play.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Код персонажа',
					'mask' : '****************',
					'comment' : 'Введите код персонажа. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'835' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Годвиль',
			'image' : 'xsl_godvil.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Введите ник',
					'mask' : '****************',
					'comment' : 'Введите ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'836' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'spaces.ru',
			'image' : 'xsl_space.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Введите ник',
					'mask' : '****************',
					'comment' : 'Введите ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'837' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'gamenet',
			'image' : 'xsl_gamenet.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Введите лицевой счет',
					'mask' : '****************',
					'comment' : 'Введите лицевой счет. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'838' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Галактика знакомств',
			'image' : 'xsl_galaxy.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Введите идентификатор персонажа',
					'mask' : '****************',
					'comment' : 'Введите идентификатор персонажа. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'839' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Мир Теней',
			'image' : 'xsl_mirt.gif',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Введите идентификатор пользователя',
					'mask' : '****************',
					'comment' : 'Введите идентификатор пользователя. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131316' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Краснодарский Край',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (861) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131317' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Сочи',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (862) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131318' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Адыгея',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (877) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131319' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Ростов-на-Дону',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (863) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131320' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Карачаево-Черкессия',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (878) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131321' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Ставропольский край',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (865) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131322' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Северная Осетия',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (867) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131323' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Пятигорск, КМВ',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (879) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131324' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком Дагестан',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (872) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'916' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Ростелеком',
			'image' : 'tel_utk.gif',
			'inn_for_cheque' : '7707049388',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : 'Код услуги',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 от 18.02.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'875' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Одноклассники',
			'inn_for_cheque' : '2309074812',
			'image' : 'ohr_odnokl.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '50',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите логин или аккаунт',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'876' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'СТВ',
			'inn_for_cheque' : '2309074812',
			'image' : 'int_stv.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '50',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '8',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер счета',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'877' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТАКОМ(БИЛАЙН-ТАДЖИКИСТАН)',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_beeline.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '20',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '*********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'878' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТАДЖИКИСТАН (TT-MOBILE)',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_megafon.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '20',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '*********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'879' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'АРМЕНТЕЛ(ФИКС. СВЯЗЬ)',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_beeline.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'880' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'АРМЕНТЕЛ(МОБ. СВЯЗЬ)',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_beeline.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'881' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Neo',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_neo.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'882' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'KCELL',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_kcell.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '40',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'883' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'BEELINE (КАЗАХСТАН)',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_beeline.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'884' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ACTIV (КАЗАХСТАН)',
			'inn_for_cheque' : '2309074812',
			'image' : 'mob_activ.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '40',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'885' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'СТЕЛСТЕЛЕКОМ (ЭРлайн)',
			'inn_for_cheque' : '2309074812',
			'image' : 'int_erlayn.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'введите логин или счет',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'886' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Avon',
			'inn_for_cheque' : '2309074812',
			'image' : 'ohr_avon.gif',
			'ps_comission' : '1%',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер лицевого счета клиента',
					'comment' : 'Оплата производится посредством заключения  договора (публичная оферта) с Банком (Открытое акционерное общество "Краснодарский краевой инвестиционный банк")  об осуществлении перечисления денежных средств  с предоплаченной карты Банка в пользу получателей'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'840' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Добр. пожертвования на охрану',
			'image' : 'ohr_detsad.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '5',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер лицевого счета',
					'mask' : '****************'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : 'Контактный телефон плательщика',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-800-3',
			'dog' : '№230/ДС от 12.12.2011г.,№183/ДС от 13.12.2011г.,№191/ДС от 26.12.2011г.,№197/ДС от 13.12.2011г.,№93/ДС от 15.12.2011г. ,№1/ДС от 20.12.2011 г. ,№113/ДС от 26.12.2011г.,№132/ДС от 22.12.2011г.,№213/ДС от 26.12.2011г.,№106/ДС от20.12.2011г. ,№109/ДС от 20.12.2011г.,№111/ДС от 01.12.2011г.,№112/ДС от20.12.2011г. ,№116/ДС от 20.12.2011г.,№138/ДС от1.12.2011 г. ,№15/ДС от 20.12.2011 г.,№16/ДС от 27.01.2012г.,№162/ДС от 20.12.2011г.,№163/ДС от 20.12.2011г.,№167/ДС от 01.12.2011г.,№17/ДС от 20.12.2011г.,№179/ДС от 01.12.2011г.,№18/ДС от 1.12.2011г.,№184/ДС от 01.12.2011г.,№190/ДС от 26.12.2011г.,№195/ДС от1.12.2011 г. ,№2/ДС от 20.12.2011г. ,№20/ДС от 20.12.2011г. ,№205/ДС от 20.12.2011г.,№206/ДС от 20.12.2011г.,№211/ДС от 20.12.2011г.,№215/ДСот20.12.2011 г. ,№219/ДС от 20.12.2011г.,№220/ДС от 20.12.2011г.,№222/ДС от 20.12.2011г.,№223/ДС от 20.12.2011г.,№224/ДС от 20.12.2011г.,№225/ДСот26.12.2011 г. ,№226/ДС от 19.12.2012г.,№227/ДС от 19.12.2011г.,№234/ДС от 01.12.2011г.,№26/ДС от27.01.2012 г. ,№3/ДС от 1.12.2011 г. ,№33/ДС от19.12.2011 г. ,№34/ДС от 20.12.2011г.,№35/ДС от 20.12.2011г. ,№36/ДС от 20.12.2011г. ,№38/ДС от 27.01.2012г.,№41/ДС от 20.12.2011г. ,№43/ДС от 20.12.2011г. ,№48/ДС от 22.12.2011г. ,№50/ДС от20.12.2011 г. ,№53/ДС от 26.12.2011г.,№54/ДС от 20.12.2011г. ,№55/ДС от20.12.2011 г. ,№57/ДС от20.12.2011 г. ,№60/ДС от 27.01.2012г.,№61/ДС от27.01.2012 г. ,№66/ДС от1.12.2011 г. ,№7/ДС от 20.12.2011г.,№75/ДС от 20.12.2011г. ,№79/ДС от 20.12.2011г. ,№85/ДС от 20.12.2011г. ,№88/ДС от 20.12.2011г. ,№91/ДС от 20.12.2011г. ,№97/ДС от 20.12.2011г.,№99/ДС от 20.12.2011г.,№161/ДС от 17.01.2012г.,№5/ДС от 20.12.2011г.,№68/ДС от 20.12.2011г.,№101/ДС от20.12.2011г. ,№115/ДС от 22.12.2011г.,№131/ДС от 01.12.2011г.,№23/ДС от 20.12.2011г.,№135/ДС от 12.12.2011г.,№164/ДС от 17.01.2012г.,№31/ДС от 29.11.2011г.,№39/ДС от 22.12.2011г.,№84/ДС от 22.12.2011г. ,№92/ДС от 26.12.2011г. ,№124/ДС от 29.12.2011г.,№139/ДС от 29.12.2011г.,№168/ДС от 20.12.2011г.,№169/ДС от 26.12.2011г.,№228/ДС от 20.12.2011г.,№70/ДС от 29.12.2011г. ,№173/ДС от 19.12.2011г.,№232/ДС от 20.12.2011г.,№137/ДСот20.12.2011 г. ,№145/ДС от 01.12.2011г.,№146/ДС от 06.12.2011г.,№147/ДС от 01.12.2011г.,№149/ДС от 08.12.2011г.,№150/ДС от 08.12.2011г.,№151/ДС от 01.12.2011г.,№152/ДС от 06.12.2011г.,№154/ДС от 08.12.2011г.,№155/ДС от 06.12.2011г.,№156/ДС от 08.12.2011г.,№158/ДС от 06.12.2011г.,№188/ДС от 20.12.2011г.,№25/ДС от 20.12.2011г. ,№76/ДС от 26.12.2011г.,№82/ДС от 26.12.2011г. ,№87/ДС от 20.12.2011 г.,№94/ДС от 20.12.2011г. ,№231/ДС от 06.09.2011г.,№143/ДС от 01.12.2011г.,№140/ДС от 01.12.2011г.,№72/ДС от 20.12.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131325' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'НЭСК ОАО',
			'image' : 'zkh_nesk.gif',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '20',
					'name' : 'Номер счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/Владелец: ([^<]*)/#]',
						'description' : 'Владелец'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/Сумма к оплате: ([^<]*)/#]',
						'description' : 'Cумма к оплате'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'inn_for_cheque' : '2308091759',
			'name_for_cheque' : '(861) 216-83-08',
			'dog' : '193НЭ-ДХ от 21.11.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'889' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'НЭСК',
			'image' : 'zkh_nesk.gif',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'enum',
					'name' : 'Тип платежа',
					'enum' : '',
					'enum' : {
						'24' : 'Абинск',
						'32' : 'Анапа',
						'13' : 'Апшеронск',
						'17' : 'Армавир',
						'31' : 'Белореченск',
						'6' : 'Геленджик',
						'5' : 'Горячий ключ',
						'30' : 'Гулькевичи',
						'10' : 'Кореновск',
						'26' : 'Краснодар - Западное отделение',
						'25' : 'Краснодар - Карасунское отделение',
						'28' : 'Краснодар - Прикубанское отделение',
						'27' : 'Краснодар - Центральное отделение',
						'21' : 'Кропоткин',
						'9' : 'Крымск',
						'19' : 'Курганинск',
						'29' : 'Лабинск',
						'23' : 'Мостовской',
						'22' : 'Новокубанск',
						'16' : 'Новороссийск - Муниципальный',
						'15' : 'Новороссийск - Частный',
						'12' : 'Приморско-Ахтарск',
						'14' : 'Славянск',
						'8' : 'Темрюк',
						'7' : 'Тимашевск',
						'18' : 'Тихорецк',
						'11' : 'Усть-Лабинск'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/Владелец: ([^<]*)/#]',
						'description' : 'Владелец'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/Сумма к оплате: ([^<]*)/#]',
						'description' : 'Cумма к оплате'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'inn_for_cheque' : '2308091759',
			'name_for_cheque' : '(861) 216-83-08',
			'dog' : '193НЭ-ДХ от 21.11.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'890' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Интернет Мегафон',
			'image' : 'mob_megafon.gif',
			'inn_for_cheque' : '2308071777',
			'rootmenuimage' : 'main_megafon.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Введите номер договора или лицевого счета',
					'mask' : '(***) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0500',
			'dog' : 'П-2006-19 от 15.05.2006 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'891' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "КомЛинк"',
			'image' : 'int_comlink.gif',
			'inn_for_cheque' : '2309100188',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Введите номер лицевого счета',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 201-11-11',
			'dog' : '09/11 от 09.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'892' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МТС "Дом. Интернет,ТВ и Тел."',
			'image' : 'mts_itv.gif',
			'inn_for_cheque' : '7740000076',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Л/С абонента.',
					'mask' : '***********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-250-08-90',
			'dog' : 'ПП-54 от 13 июля 2010г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'894' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Сити-Телеком',
			'image' : 'int_citytel.gif',
			'inn_for_cheque' : '2302064156',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Л/С абонента.',
					'mask' : 'PPPoE - ****'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(86137) 21-0-96',
			'dog' : '0111 от 02.11.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'895' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси "РЭД"',
			'image' : 'ohr_red.gif',
			'inn_for_cheque' : '2320143178',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '7',
					'name' : 'Номер счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (8622) 61-12-08',
			'dog' : '02/12 от 02.03.2012г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'896' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'КубИнтерСвязь',
			'image' : 'int_kubinter.gif',
			'inn_for_cheque' : '7713076301',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер договора',
					'mask' : '**********',
					'comment' : '[b]Внимание![/b] Номер договора начинается с "[b]086 или 087[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : 'Д182/2 от 01.07.2008 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'898' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата интернета ШПД',
			'image' : 'int_cifr1.gif',
			'inn_for_cheque' : '2308073414',
			'rootmenuimage' : 'main_novotelecom.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'НОМЕР ДОГОВОРА',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 219-52-22',
			'dog' : '28/11 от 28.12.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'899' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'СРО "МОАТП" (такси)',
			'image' : 'ohr_vodn.gif',
			'inn_for_cheque' : '231205769192',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (918) 384-70-50',
			'dog' : '18/11 от 18.11.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'900' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Газпром межрегионгаз Майкоп',
			'image' : 'zkh_arg.png',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '5',
					'maxlength' : '12',
					'name' : 'Номер лицевого счета',
					'comment' : 'Введите номер лицевого счета'
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : 'Значение счетчика',
					'mask' : '******'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Контактный телефон плательщика (без 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'897' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата за техосмотр',
			'image' : 'ohr_to.gif',
			'inn_for_cheque' : '2310138500',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер транспортного средства (например A000AA93).'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '4',
					'minlength' : '2',
					'type' : 'integer',
					'name' : 'Сумма к оплате',
					'comment' : '[b]Внимание![/b] Внесите необходимую сумму оплаты".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Проверьте правильность ввода номера, на этот номер будет зачислен остаток внесенных средств [/b].'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 255-23-77',
			'dog' : '16/12 от 16.04.2012 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '10',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '20',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'901' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата за штрафстоянку',
			'image' : 'ohr_eva.gif',
			'inn_for_cheque' : '2311010478',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер транспортного средства (например A000AA93).'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '4',
					'minlength' : '2',
					'type' : 'integer',
					'name' : 'Сумма к оплате',
					'comment' : '[b]Внимание![/b] Внесите необходимую сумму оплаты".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Проверьте правильность ввода номера, на этот номер будет зачислен остаток внесенных средств [/b].'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 222-91-41',
			'dog' : '20/12 от 20 февраля 2012 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'902' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '2ГИС',
			'image' : 'ohr_2gis.gif',
			'inn_for_cheque' : '2312167231',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите номер.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 299-12-60',
			'dog' : '20/12 от 20.04.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'903' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'БИГЛИОН',
			'image' : 'ohr_bigl.gif',
			'inn_for_cheque' : '2312167231',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите номер телефона или л/с.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'904' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Инновационные технологии',
			'image' : 'ohr_innovat.gif',
			'inn_for_cheque' : '2310146571',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите логин'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : 'Введите фамилию',
					'comment' : '[b]Внимание![/b] Только фамилия".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 201-10-25',
			'dog' : '14/12 от 14 мая 2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'905' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси 777',
			'image' : 'ohr_777.gif',
			'inn_for_cheque' : '231113492688',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите свой Позывной'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Введите контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 215-06-26',
			'dog' : '11/04 от 11 апреля 2012г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'906' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Параллельные миры',
			'image' : 'ohr_pm.gif',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '50',
				'max' : '6000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Идентификатор персонажа',
					'mask' : '***************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'inn_for_cheque' : '2466122079',
			'name_for_cheque' : 'mobstudio@mobstudio.ru',
			'dog' : '05/ГЗ от 21.07.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1008' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Mary Kay',
			'image' : 'ohr_mk.gif',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '11',
					'maxlength' : '11',
					'name' : 'Номер Консультанта и контрольный разряд',
					'comment' : '[b]Строго 9 цифр - номер Консультанта, 2 - контрольный разряд,  если цифр меньше, то добавляем слева нули[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : 'Имя и Отчество'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : 'Фамилия'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'7777' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Mary Kay',
			'image' : 'ohr_mk.gif',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : 'Фамилия Консультанта'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'908' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Билайн Узбекистан',
			'image' : 'mob_beeline.gif',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '*********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'909' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ОСК',
			'image' : 'int_osk.gif',
			'limit' : {
				'min' : '1',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '11',
					'name' : 'Введите Ваш PIN — код'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 от 11.12.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'910' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МТС Армения (VivaCell)',
			'image' : '',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'911' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Прогтех-Юг',
			'image' : '',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер',
					'mask' : '*****'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'912' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Вавилон-Мобайл',
			'image' : '',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '*********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'913' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Детские сады г. Анапа',
			'image' : 'ohr_detsad.gif',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'99' : {
					'id' : '99',
					'type' : 'enum',
					'name' : 'Детский сад',
					'enum' : '',
					'enum' : {
						'9761176' : 'ДС №30 "Березка"',
						'9761215' : 'ДС №45 "Виноградинка"'
					}
				},
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета.',
					'mask' : '**********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц и год оплаты',
					'mask' : '**.****',
					'comment' : '[b]Внимание![/b] Месяц и год за который производится оплата".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Проверьте правильность ввода номера, на этот номер будет зачислен остаток внесенных средств [/b].'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Имя и Отчество плательщика',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '15',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'9999' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Фамилия Плательщика',
			'image' : 'gibdd.gif',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'110' : {
					'id' : '110',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'mask' : '8 (***) ***-****',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			}
		},
		'914' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МТС оплата по лицевому счету',
			'inn_for_cheque' : '7740000076',
			'image' : '',
			'rootmenuimage' : 'main_mts.jpg',
			'eppa' : '0',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Лицевой счет',
					'mask' : '************'
				}
			},
			'processor' : {
				'type' : 'cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-800-333-0890',
			'dog' : '2/ПЦ1/04.06 от 14.04.2006 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'915' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Белтелеком',
			'inn_for_cheque' : '2303025304',
			'image' : '',
			'rootmenuimage' : 'main_mts.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '4',
					'name' : 'Лицевой счет'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8(***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(86155) 3-20-30',
			'dog' : '9/06 от 9.06.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'917' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Webmoney',
			'image' : 'ec_wm.gif',
			'inn_for_cheque' : '7702594855',
			'rootmenuimage' : 'ec_wm.gif',
			'ps_comission' : '2,3852%',
			'limit' : {
				'min' : '31',
				'max' : '4990'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер R-кошелька',
					'mask' : 'R************',
					'comment' : '[b]Внимание![/b] Номер R-кошелька "[b]12[/b]" цифр. При пополнении кошелька [b]взимается дополнительная комиссия в размере 1,9852%. Данная комиссия взимается помимо основной комиссии. Для пополнения необходим ФОРМАЛЬНЫЙ АТТЕСТАТ[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495) 727-43-33',
			'dog' : 'ГБ-23 от 14.05.09г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'918' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Триколор ТВ пакет "Кинозалы"',
			'image' : '',
			'inn_for_cheque' : '7733547365',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '12',
					'maxlength' : '14',
					'name' : 'Введите номер Абонентского договора или приемника',
					'comment' : '[b]Внимание![/b] Номер от "[b]12[/b]" до "[b]14[/b]" цифр.[b]Услуга доступна только на  приемном оборудовании моделей GS 8300 (m,n), DRS 8300, GS 8302, GS 8304, GS8305, GS 8306, HD 9303. Информация о модели указана на передней панели приемника. Услуга временно недоступна для абонентов «Триколор ТВ-Сибирь[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 от 01.11.2009 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'919' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Телекарта',
			'image' : '',
			'inn_for_cheque' : '7733547365',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '11',
					'maxlength' : '12',
					'name' : 'Введите номер',
					'comment' : '[b]Внимание![/b] Номер "[b]от 11 до 12[/b]" цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'920' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'CrossFire',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'921' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Платеж в Яндекс',
			'image' : 'ec_yandexm.gif',
			'inn_for_cheque' : '7736554890',
			'rootmenuimage' : 'ec_yandexm.gif',
			'ps_comission' : '2.5%',
			'limit' : {
				'min' : '31',
				'max' : '4990'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '32',
					'minlength' : '3',
					'type' : 'integer',
					'name' : 'Номер счета',
					'comment' : 'Введите номер счета (или привязанного к счету телефона) в Яндекс.Деньгах или код для платежа в Яндекс. [b]Внимание![/b] При пополнении кошелька взимается дополнительная комиссия в размере 2.5%. Данная комиссия взимается помимо основной комиссии.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : 'support@money.yandex.ru',
			'dog' : 'Б.12121.01 от 03.02.2009 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'9998' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Печать информации о принятых денежных средствах.',
			'image' : '',
			'inn_for_cheque' : '2309074812',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите номер, на который происходила оплата. Номер сотового телефона вводится без 8 и только цифры.',
					'comment' : '[b]Введите номер, на который происходила оплата. Номер сотового телефона вводится без 8 и только цифры.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			}
		},
		'922' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "Протон"',
			'image' : '',
			'inn_for_cheque' : '2303017938',
			'rootmenuimage' : 'tv_proton.gif',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'maxlength' : '32',
					'minlength' : '3',
					'type' : 'text',
					'name' : 'Лицевой счет'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(86155) 2-66-95',
			'dog' : '09/12 от 09 октября 2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'923' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МТС Украина',
			'image' : 'mob_mts_espp.gif',
			'inn_for_cheque' : '5407183220',
			'rootmenuimage' : 'mob_mts.gif',
			'ps_comission' : '1%',
			'limit' : {
				'min' : '31',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '*********',
					'comment' : '[b]Внимание![/b] Номер вводится без 0'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'924' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Билайн Украина',
			'image' : 'mob_beeline.gif',
			'inn_for_cheque' : '5407183220',
			'rootmenuimage' : 'mob_bee.gif',
			'ps_comission' : '1%',
			'limit' : {
				'min' : '31',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '*********',
					'comment' : '[b]Внимание![/b] Номер вводится без 0'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'925' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Utel Украина',
			'image' : '',
			'inn_for_cheque' : '5407183220',
			'rootmenuimage' : 'mob_utelu.gif',
			'ps_comission' : '1%',
			'limit' : {
				'min' : '31',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '*********',
					'comment' : '[b]Внимание![/b] Номер вводится без 0'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 Номер точки: 36418',
			'dog' : '2/07/3308 от 17.07.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'926' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Красных Зорь,15',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '3',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры от 1 до 3 цифр[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907'
		},
		'927' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Толмачева,127/44а',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '3',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры от 1 до 3 цифр[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907'
		},
		'928' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Пушкинская,4а',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '3',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры от 1 до 3 цифр[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907'
		},
		'929' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Sportebay',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '2',
					'maxlength' : '5',
					'name' : 'Номер заказа',
					'comment' : '[b]Номер заказа от 2 до 5 цифр[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***)***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861)  235-68-04',
			'dog' : '09/12 от 08 ноября 2012г.',
			'inn_for_cheque' : '2312016641'
		},
		'930' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'МЭЦ',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Введите лицевой счет',
					'mask' : '*********',
					'comment' : '[b]Лицевой счет 9 цифр[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***)***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '(861) 260-33-88',
			'dog' : '10/12 от 10.10.2012 г.',
			'inn_for_cheque' : '2312115804'
		},
		'931' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'BS.RU',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'932' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Magic World 2',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'933' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Combat Arms',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'934' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Golden Age',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'935' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Aika Online',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'936' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Firestorm',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'937' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Битва фермеров',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'938' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Битва Титанов',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID или ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'939' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Небоскребы',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID или ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'940' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Танки',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID или ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'941' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Питомцы',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID или ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'942' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Mental Online',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'943' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Хоккейная лига Интернета',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'944' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'LegendsGame.ru',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'945' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ВГороде',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'946' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Warface',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите Email. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'947' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Поднебесье',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите логин. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'948' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Vichatter',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'949' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Супер Гонки',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите регистрационный номер. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'950' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'panzar.ru',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'951' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Ice Kings',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ник персонажа. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'952' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Болельщики',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'953' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Lost Magic',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите E-mail. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'954' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Pogamay.ru',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'955' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Дар Богов',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите номер счета. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'956' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Carnage2009',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите номер счета. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'957' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Exgods',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите номер счета. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'958' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Бумз',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите платежный ID. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'959' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Повелители',
			'image' : '',
			'inn_for_cheque' : '5902834229',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Идентификатор',
					'comment' : 'Укажите ник. Внимание! Поставщик услуг Xsolla. Стоимость игровой валюты вы можете уточнить по телефону горячей линии 88002002729 (звонок бесплатный). Может быть удержана дополнительная комиссия.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 от 01.09.2010',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'960' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси "Вест" Краснодар',
			'image' : '',
			'inn_for_cheque' : '5904256904',
			'rootmenuimage' : '1.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : 'Номер л/с',
					'comment' : 'Введите номер лицевого счета.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (342) 240-81-78',
			'dog' : '07/12 от 7 декабря 2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'961' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'VIVA Деньги',
			'image' : '',
			'rootmenuimage' : 'ec_viva.gif',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер договора',
					'mask' : 'z************'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0,5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'962' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'MasterCard',
			'image' : '',
			'rootmenuimage' : 'ec_mastercard.gif',
			'limit' : {
				'min' : '50',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер карты',
					'mask' : '**** **** **** ****',
					'comment' : '[b]Внимание![/b] Возможна оплата на карты MasterCard только [b]российских[/b] банков.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '50',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '2500',
					'value' : '2%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'963' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Visa',
			'image' : '',
			'rootmenuimage' : 'ec_visa.gif',
			'limit' : {
				'min' : '50',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер карты',
					'mask' : '**** **** **** ****',
					'comment' : '[b]Внимание![/b] Возможна оплата на карты VISA только [b]российских[/b] банков.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '50',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '2500',
					'value' : '2%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'964' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Visa (Страны СНГ)',
			'image' : '',
			'rootmenuimage' : 'ec_visa.gif',
			'limit' : {
				'min' : '100',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер карты',
					'mask' : '**** **** **** ****',
					'comment' : '[b]Внимание![/b] Возможна оплата на карты VISA только [b]российских[/b] банков.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : 'Фамилия и Имя отправителя'
				},
				'103' : {
					'id' : '103',
					'type' : 'text',
					'name' : 'Город отправителя'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '250',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '10000',
					'value' : '2,5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'965' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Оплата за транспортировку',
			'image' : '',
			'inn_for_cheque' : '2308136470',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер транспортного средства (например A000AA93).'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '4',
					'minlength' : '2',
					'type' : 'integer',
					'name' : 'Сумма к оплате',
					'comment' : '[b]Внимание![/b] Внесите необходимую сумму оплаты".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Проверьте правильность ввода номера, на этот номер будет зачислен остаток внесенных средств [/b].'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 270-24-76, (861) 944-13-44',
			'dog' : '06/02 от 06 февраля 2013 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '25',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'966' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ЕРКЦ',
			'image' : '',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'enum',
					'name' : 'Выберите участок',
					'enum' : '',
					'enum' : {
						'1' : 'Полтавская',
						'2' : 'Чебургольская',
						'3' : 'Трудобеликовский',
						'4' : 'С.Н. Стеблиевская',
						'5' : 'Протоцкие',
						'6' : 'Протичка',
						'7' : 'Н.Мышастовская',
						'8' : 'Марьянская',
						'9' : 'Рисоопытный',
						'10' : 'С. Джерелиевская',
						'11' : 'Ивановская',
						'12' : 'Октябрьский',
						'13' : 'Элитный',
						'14' : 'Крупский'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/Владелец: ([^<]*)/#]',
						'description' : 'Владелец'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/Сумма к оплате: ([^<]*)/#]',
						'description' : 'Cумма к оплате'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'inn_for_cheque' : '2308091759',
			'name_for_cheque' : '(861) 216-83-08',
			'dog' : '193НЭ-ДХ от 21.11.2011 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '6',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '101',
					'value' : '6%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'131327' : {
			'i_type' : 'comm_plat',
			'printer_ok_only' : '0',
			'name' : 'ЕРКЦ',
			'image' : '',
			'rootmenuimage' : 'main_utk.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'99' : {
					'id' : '99',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Проверьте правильность ввода номера, на этот номер будет зачислен остаток внесенных средств [/b].'
				},
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : 'Номер счета'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/Владелец: ([^<]*)/#]',
						'description' : 'Владелец'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/Сумма к оплате: ([^<]*)/#]',
						'description' : 'Cумма к оплате'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'inn_for_cheque' : '2336018461',
			'name_for_cheque' : '+7 (86165) 3-26-35',
			'dog' : '12/12 от 12.12.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				},
				'part1' : {
					'min' : '100',
					'value' : '5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'967' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Большая Садовая,106',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'968' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Большая Садовая,142',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'969' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'пер.Журавлева,102/105',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'970' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'пр.Кировский,75',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'971' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Красноармейская,240',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'972' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Красных Зорь,25',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'973' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Малюгиной,284',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'974' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.М.Горького,185',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'975' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'пер.Нахичеванский,37',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'976' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Пушкинская,38',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'977' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Пушкинская,81А',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'978' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Пушкинская,151',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'979' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Пушкинская 176',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'980' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Пушкинская,204',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'981' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Пушкинская,206',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'982' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Семашко,25',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'983' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Социалистическая,144/146',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'984' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Социалистическая,166',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'985' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'пер.Университетский,54',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'986' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ул.Ченцова,15',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'987' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'пр.Чехова,22/99',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (863) 227-70-20',
			'dog' : '08/11 от 08.11.2012г.',
			'inn_for_cheque' : '6163107907',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'988' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Альпари',
			'image' : '',
			'rootmenuimage' : 'ohr_alpari.gif',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '5',
					'maxlength' : '8',
					'name' : 'Номер торгового или лицевого счета',
					'mask' : '**** **** **** ****',
					'comment' : '[b]Внимание![/b] номер от 5 до 8 цифр.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'989' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Триколор ТВ Радиопакет',
			'image' : '',
			'inn_for_cheque' : '7733547365',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '12',
					'maxlength' : '14',
					'name' : 'Введите номер Абонентского договора или приемника',
					'comment' : '[b]Внимание![/b] Номер "[b]12[/b]" или "[b]14[/b]" цифр. [b]Услуга доступна на оборудовании GS-8300(M,N),8302,8304,8305,8306(B,S),DRS 8300,HD 9303,CAM-DRE(MPEG-4).Недоступна для абонентов «Триколор ТВ-Сибирь».[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 от 01.11.2009 г',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'990' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ТСЖ "Стабильность"',
			'image' : '',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Номер квартиры',
					'comment' : '[b]Номер квартиры[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц оплаты',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'dog' : '18/12 от 18.12.2012 г.',
			'inn_for_cheque' : '6168023016',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'991' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ООО "ИВ-Консалтинг"',
			'image' : 'zkh.gif',
			'rootmenuimage' : 'main_skylink.jpg',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'integer',
					'minlength' : '2',
					'maxlength' : '12',
					'name' : 'Номер лицевого счета.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8[/b].'
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : 'Месяц и год оплаты',
					'mask' : '**.****',
					'comment' : '[b]Внимание![/b] Месяц и год за который производится оплата.'
				},
				'104' : {
					'id' : '104',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '5',
					'name' : 'Показания счетчика',
					'comment' : '[b]Внимание![/b] Введите показания счетчика.'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : 'Имя и Отчество плательщика',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '15',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'992' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '"Ирбис Телеком"',
			'image' : '',
			'inn_for_cheque' : '2310067810',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер договора',
					'mask' : '*****-**-**'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b] Номер телефона вводится без "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 200-05-00',
			'dog' : '09/13 от 03.01.2013 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'993' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Tap taxi',
			'image' : '',
			'inn_for_cheque' : '2308196409',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '****'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (918) 446-34-448',
			'dog' : '20/02 от 20.02.2013 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1020' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Детский сад №8 "Теремок"',
			'image' : 'ohr_detsad.gif',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета.',
					'mask' : '**********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц и год оплаты',
					'mask' : '**.****',
					'comment' : '[b]Внимание![/b] Месяц и год за который производится оплата".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '3',
					'maxlength' : '6',
					'name' : 'Код ребенка'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Имя и Отчество плательщика',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '15',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1021' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Детский сад №11 ст-ца Шкуринская',
			'image' : 'ohr_detsad.gif',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета.',
					'mask' : '**********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц и год оплаты',
					'mask' : '**.****',
					'comment' : '[b]Внимание![/b] Месяц и год за который производится оплата".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '3',
					'maxlength' : '4',
					'name' : 'Код ребенка'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Имя и Отчество плательщика',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '15',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1022' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'РКЦ Анапа (хол. вода)',
			'image' : 'zkh.gif',
			'rootmenuimage' : 'main_beeline.jpg',
			'limit' : {
				'min' : '10',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер лицевого счета.',
					'mask' : '********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Месяц и год оплаты',
					'mask' : '**.****',
					'comment' : '[b]Внимание![/b] Месяц и год за который производится оплата".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Имя и Отчество плательщика',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : 'Фамилия плательщика',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : 'Информация о абоненте'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : 'Информация о абоненте'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 от 30.11.2011г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '15',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'997' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Резерв мастер',
			'image' : '',
			'inn_for_cheque' : '5043045372',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '****-**|******/1'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(495) 227-03-42',
			'dog' : '21/12 от 21.12.2012 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'756' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Знакомства',
			'image' : 'ohr_sms.gif',
			'inn_for_cheque' : '2721119486',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание![/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : 'Пол',
					'comment' : '[b]Внимание![/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : 'Возвраст',
					'comment' : '[b]Внимание![/b]'
				},
				'103' : {
					'id' : '103',
					'type' : 'text',
					'name' : 'Имя',
					'comment' : '[b]Внимание![/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : 'Пол искомого',
					'comment' : '[b]Внимание![/b]'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Возвраст от',
					'comment' : '[b]Внимание![/b]'
				},
				'106' : {
					'id' : '106',
					'type' : 'text',
					'name' : 'Возвраст до',
					'comment' : '[b]Внимание![/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '88003333767',
			'dog' : '71-858-1-FLIRTPAY10-20100816 от 19.10.2010 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'998' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ГБУЗ СПБ №7 (охрана, водительское, прием на работу)',
			'image' : '',
			'inn_for_cheque' : '2311038748',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите Фамилию'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 228-79-99',
			'dog' : '25/13 от 25.06.2013 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1023' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'ГБУЗ СПБ №7 (прочие)',
			'image' : '',
			'inn_for_cheque' : '2311038748',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите Фамилию'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8.[/b]'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '3',
					'maxlength' : '4',
					'name' : 'Введите стоимость справки'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 228-79-99',
			'dog' : '25/13 от 25.06.2013 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1024' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Такси пятерочка',
			'image' : '',
			'inn_for_cheque' : '234909525409',
			'limit' : {
				'min' : '10',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : 'Номер счета',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (918) 053-53-77',
			'dog' : '27/13 от 27.03.2013 г.',
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '0%',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		},
		'1025' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : 'Нарики',
			'image' : '',
			'inn_for_cheque' : '2311038748',
			'limit' : {
				'min' : '10',
				'max' : '14999'
			},
			'fields' : {
				'99' : {
					'id' : '99',
					'type' : 'enum',
					'name' : 'Вид справки',
					'enum' : '',
					'enum' : {
						'22' : 'Водительское',
						'3' : 'Оружие',
						'4' : 'Какая-нибудь шняга'
					}
				},
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : 'Введите Фамилию'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : 'Введите Имя'
				},
				'103' : {
					'id' : '103',
					'type' : 'text',
					'name' : 'Введите Отчество'
				},
				'104' : {
					'id' : '104',
					'type' : 'masked',
					'name' : 'Дата рождения',
					'mask' : '**.**.****',
					'comment' : '[b]Например 24.11.1998[/b]'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : 'Адрес проживания'
				},
				'106' : {
					'id' : '106',
					'type' : 'enum',
					'name' : 'Мигрант',
					'enum' : '',
					'enum' : {
						'1' : 'Да',
						'0' : 'Нет'
					}
				},
				'107' : {
					'id' : '107',
					'type' : 'enum',
					'name' : 'Документ удостоверяющий личность',
					'enum' : '',
					'enum' : {
						'Паспорт' : 'Паспорт',
						'Прочее' : 'Прочее'
					}
				},
				'108' : {
					'id' : '108',
					'type' : 'text',
					'name' : 'Серия'
				},
				'109' : {
					'id' : '109',
					'type' : 'text',
					'name' : 'Номер'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : 'Контактный номер телефона',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]Внимание! Номер вводится без 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 228-79-99',
			'dog' : '25/13 от 25.06.2013 г.',
			'complex_comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				}
			},
			'comission' : {
				'part0' : {
					'min' : '0',
					'value' : '5',
					'min_time' : '0',
					'min_day' : '0'
				}
			}
		}
	},
	'menu' : {
		'0' : {
			'name' : 'Выберите вид платежа',
			'columns' : '2',
			'rows' : '-1',
			'100' : {
				'name' : '',
				'columns' : '1',
				'id' : '100',
				'image' : 'main_main_ico.gif',
				'op4' : {
					'id' : '1025',
					'image' : 'mob_mts.gif',
					'rootmenuimage' : 'main_mts.gif'
				},
				'op5' : {
					'id' : '999',
					'image' : 'mob_beeline.gif',
					'rootmenuimage' : 'main_beeline.gif'
				},
				'op6' : {
					'id' : '999',
					'image' : 'mob_megafon.gif',
					'rootmenuimage' : 'main_megafon.gif'
				},
				'op7' : {
					'id' : '999',
					'image' : 'mob_tele2.gif',
					'rootmenuimage' : 'main_tele2.gif'
				},
				'206' : {
					'name' : 'Ростелеком',
					'columns' : '2',
					'id' : '206',
					'image' : 'op/tel_utk.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '131316'
					},
					'op6' : {
						'id' : '131319'
					},
					'op7' : {
						'id' : '131317'
					},
					'op8' : {
						'id' : '131318'
					},
					'op9' : {
						'id' : '131321'
					},
					'op10' : {
						'id' : '131322'
					},
					'op11' : {
						'id' : '131320'
					},
					'op12' : {
						'id' : '131323'
					}
				}
			},
			'101' : {
				'name' : 'Мобильная связь',
				'columns' : '2',
				'id' : '101',
				'image' : 'main_mob.png',
				'rows' : '3',
				'titleimage' : 'main_mobile_ico.jpg',
				'op6' : {
					'id' : '0'
				},
				'op7' : {
					'id' : '914'
				},
				'op8' : {
					'id' : '2'
				},
				'op9' : {
					'id' : '21'
				},
				'op10' : {
					'id' : '10'
				},
				'201' : {
					'name' : 'СкайЛинк',
					'columns' : '2',
					'id' : '201',
					'image' : 'mob_skylink.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '19'
					},
					'op6' : {
						'id' : '45'
					},
					'op7' : {
						'id' : '46'
					},
					'op8' : {
						'id' : '47'
					},
					'op9' : {
						'id' : '48'
					},
					'op10' : {
						'id' : '49'
					},
					'op11' : {
						'id' : '430'
					},
					'op12' : {
						'id' : '706'
					}
				},
				'op12' : {
					'id' : '910'
				},
				'op13' : {
					'id' : '908'
				},
				'op14' : {
					'id' : '878'
				},
				'op15' : {
					'id' : '877'
				},
				'op16' : {
					'id' : '25'
				},
				'op17' : {
					'id' : '880'
				},
				'op18' : {
					'id' : '912'
				},
				'202' : {
					'name' : 'СМАРТС',
					'columns' : '2',
					'id' : '202',
					'image' : 'mob_smarts.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '13'
					},
					'op6' : {
						'id' : '14'
					},
					'op7' : {
						'id' : '15'
					},
					'op8' : {
						'id' : '16'
					},
					'op9' : {
						'id' : '17'
					},
					'op10' : {
						'id' : '18'
					}
				},
				'203' : {
					'name' : 'НСС',
					'columns' : '2',
					'id' : '203',
					'image' : 'mob_nss.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '23'
					},
					'op6' : {
						'id' : '524'
					},
					'op7' : {
						'id' : '751'
					},
					'op8' : {
						'id' : '752'
					},
					'op9' : {
						'id' : '753'
					},
					'op10' : {
						'id' : '754'
					}
				},
				'op21' : {
					'id' : '883'
				},
				'op22' : {
					'id' : '26'
				},
				'op23' : {
					'id' : '64'
				},
				'op24' : {
					'id' : '923'
				},
				'op25' : {
					'id' : '667'
				},
				'op26' : {
					'id' : '884'
				},
				'op27' : {
					'id' : '61'
				},
				'op28' : {
					'id' : '537'
				},
				'op29' : {
					'id' : '22'
				},
				'op30' : {
					'id' : '882'
				},
				'op31' : {
					'id' : '41'
				},
				'op32' : {
					'id' : '634'
				},
				'op33' : {
					'id' : '879'
				},
				'op34' : {
					'id' : '881'
				},
				'op35' : {
					'id' : '27'
				},
				'op36' : {
					'id' : '63'
				},
				'op37' : {
					'id' : '62'
				},
				'op38' : {
					'id' : '20'
				},
				'op39' : {
					'id' : '29'
				},
				'op40' : {
					'id' : '42'
				},
				'op41' : {
					'id' : '740'
				},
				'op42' : {
					'id' : '741'
				},
				'op43' : {
					'id' : '44'
				},
				'op44' : {
					'id' : '31'
				},
				'op45' : {
					'id' : '924'
				},
				'op46' : {
					'id' : '925'
				}
			},
			'102' : {
				'name' : 'Телевидение',
				'columns' : '1',
				'id' : '102',
				'image' : 'main_tv.png',
				'titleimage' : 'tel.gif',
				'204' : {
					'name' : 'Триколор ТВ',
					'columns' : '1',
					'id' : '204',
					'image' : 'tel_tricolor.gif',
					'titleimage' : 'tel_tricolor.gif',
					'op5' : {
						'id' : '730'
					},
					'op6' : {
						'id' : '731'
					},
					'op7' : {
						'id' : '732'
					},
					'op8' : {
						'id' : '821'
					},
					'op9' : {
						'id' : '918'
					},
					'op10' : {
						'id' : '989'
					}
				},
				'205' : {
					'name' : 'Ростелеком',
					'columns' : '2',
					'id' : '205',
					'image' : 'tel_utk.gif',
					'titleimage' : 'main_internet_utk.gif',
					'op5' : {
						'id' : '131316'
					},
					'op6' : {
						'id' : '131319'
					},
					'op7' : {
						'id' : '131317'
					},
					'op8' : {
						'id' : '131318'
					},
					'op9' : {
						'id' : '131321'
					},
					'op10' : {
						'id' : '131322'
					},
					'op11' : {
						'id' : '131320'
					},
					'op12' : {
						'id' : '131323'
					}
				},
				'op7' : {
					'id' : '32'
				},
				'op8' : {
					'id' : '761'
				},
				'op9' : {
					'id' : '687'
				},
				'op10' : {
					'id' : '713'
				},
				'op11' : {
					'id' : '919'
				},
				'op12' : {
					'id' : '922'
				},
				'op13' : {
					'id' : '651'
				},
				'op14' : {
					'id' : '509'
				},
				'op15' : {
					'id' : '892'
				},
				'op16' : {
					'id' : '816'
				},
				'op17' : {
					'id' : '20'
				},
				'op18' : {
					'id' : '33'
				}
			},
			'103' : {
				'name' : 'Стационарная связь',
				'columns' : '2',
				'id' : '103',
				'image' : 'main_tel.png',
				'titleimage' : '',
				'206' : {
					'name' : 'Ростелеком',
					'columns' : '2',
					'id' : '206',
					'image' : 'tel_utk.gif',
					'titleimage' : 'main_internet_utk.gif',
					'op5' : {
						'id' : '131316'
					},
					'op6' : {
						'id' : '131319'
					},
					'op7' : {
						'id' : '131317'
					},
					'op8' : {
						'id' : '131318'
					},
					'op9' : {
						'id' : '131321'
					},
					'op10' : {
						'id' : '131322'
					},
					'op11' : {
						'id' : '131320'
					},
					'op12' : {
						'id' : '131323'
					}
				},
				'207' : {
					'name' : 'ЦентрТелеком',
					'columns' : '2',
					'id' : '207',
					'image' : 'int_centertelekom.gif',
					'titleimage' : 'main_internet_utk.gif',
					'208' : {
						'name' : 'Верхневолжский филиал',
						'columns' : '2',
						'id' : '208',
						'image' : 'int_centertelekom.gif',
						'titleimage' : 'main_internet_utk.gif',
						'op5' : {
							'id' : '733'
						},
						'op6' : {
							'id' : '734'
						},
						'op7' : {
							'id' : '735'
						}
					},
					'209' : {
						'name' : 'Курский филиал',
						'columns' : '2',
						'id' : '209',
						'image' : 'int_centertelekom.gif',
						'titleimage' : 'main_internet_utk.gif',
						'op5' : {
							'id' : '736'
						},
						'op6' : {
							'id' : '737'
						},
						'op7' : {
							'id' : '738'
						}
					}
				},
				'op7' : {
					'id' : '892'
				},
				'op8' : {
					'id' : '582'
				},
				'op9' : {
					'id' : '896'
				}
			},
			'104' : {
				'name' : 'Погашение кредитов',
				'columns' : '2',
				'id' : '104',
				'image' : 'main_crd.png',
				'titleimage' : 'main_internet_ktc.gif',
				'op5' : {
					'id' : '1000'
				},
				'op6' : {
					'id' : '1001'
				},
				'op7' : {
					'id' : '961'
				}
			},
			'105' : {
				'name' : 'Интернет и IP телефония',
				'columns' : '1',
				'id' : '105',
				'image' : 'main_int.png',
				'titleimage' : 'int.gif',
				'210' : {
					'name' : 'Ростелеком',
					'columns' : '2',
					'id' : '210',
					'image' : 'tel_utk.gif',
					'titleimage' : 'main_internet_utk.gif',
					'op5' : {
						'id' : '131316'
					},
					'op6' : {
						'id' : '131319'
					},
					'op7' : {
						'id' : '131317'
					},
					'op8' : {
						'id' : '131318'
					},
					'op9' : {
						'id' : '131321'
					},
					'op10' : {
						'id' : '131322'
					},
					'op11' : {
						'id' : '131320'
					},
					'op12' : {
						'id' : '131323'
					}
				},
				'op6' : {
					'id' : '679'
				},
				'op7' : {
					'id' : '712'
				},
				'op8' : {
					'id' : '892'
				},
				'op9' : {
					'id' : '638'
				},
				'op10' : {
					'id' : '639'
				},
				'op11' : {
					'id' : '760'
				},
				'op12' : {
					'id' : '894'
				},
				'op13' : {
					'id' : '520'
				},
				'op14' : {
					'id' : '824'
				},
				'op15' : {
					'id' : '818'
				},
				'op16' : {
					'id' : '817'
				},
				'op17' : {
					'id' : '823'
				},
				'op18' : {
					'id' : '915'
				},
				'op19' : {
					'id' : '530'
				},
				'211' : {
					'name' : 'Южный Телеком',
					'columns' : '1',
					'id' : '211',
					'image' : 'int_ugtelecom.gif',
					'titleimage' : 'main_internet_text.jpg',
					'op5' : {
						'id' : '153'
					},
					'op6' : {
						'id' : '154'
					},
					'op7' : {
						'id' : '898'
					}
				},
				'op21' : {
					'id' : '742'
				},
				'op22' : {
					'id' : '904'
				},
				'op23' : {
					'id' : '781'
				},
				'op24' : {
					'id' : '911'
				},
				'op25' : {
					'id' : '891'
				},
				'op26' : {
					'id' : '757'
				},
				'op27' : {
					'id' : '510'
				},
				'op28' : {
					'id' : '759'
				},
				'op29' : {
					'id' : '57'
				},
				'op30' : {
					'id' : '67'
				},
				'op31' : {
					'id' : '747'
				},
				'op32' : {
					'id' : '34'
				},
				'op33' : {
					'id' : '179'
				},
				'op34' : {
					'id' : '744'
				},
				'op35' : {
					'id' : '582'
				},
				'op36' : {
					'id' : '20'
				},
				'op37' : {
					'id' : '745'
				},
				'op38' : {
					'id' : '758'
				},
				'op39' : {
					'id' : '743'
				},
				'op40' : {
					'id' : '885'
				},
				'op41' : {
					'id' : '876'
				},
				'op42' : {
					'id' : '890'
				},
				'op43' : {
					'id' : '896'
				},
				'op44' : {
					'id' : '909'
				},
				'op45' : {
					'id' : '992'
				}
			},
			'106' : {
				'name' : 'ЖКХ',
				'columns' : '2',
				'id' : '106',
				'image' : 'main_zkh.png',
				'titleimage' : 'main_communal_ico.gif',
				'212' : {
					'name' : 'Электричество',
					'columns' : '4',
					'id' : '212',
					'image' : 'zkh_el.png',
					'titleimage' : '',
					'op5' : {
						'id' : '684'
					},
					'op6' : {
						'id' : '889'
					}
				},
				'213' : {
					'name' : 'Газ',
					'columns' : '4',
					'id' : '213',
					'image' : 'zkh_gaz.png',
					'titleimage' : '',
					'op5' : {
						'id' : '538'
					},
					'op6' : {
						'id' : '739'
					},
					'op7' : {
						'id' : '900'
					}
				},
				'214' : {
					'name' : 'ТСЖ',
					'columns' : '4',
					'id' : '214',
					'image' : 'zkh_tsg.png',
					'titleimage' : '',
					'op5' : {
						'id' : '544'
					},
					'op6' : {
						'id' : '592'
					},
					'op7' : {
						'id' : '589'
					},
					'op8' : {
						'id' : '689'
					},
					'op9' : {
						'id' : '590'
					},
					'op10' : {
						'id' : '593'
					},
					'op11' : {
						'id' : '594'
					},
					'op12' : {
						'id' : '595'
					}
				},
				'215' : {
					'name' : 'Вывоз мусора',
					'columns' : '4',
					'id' : '215',
					'image' : 'zkh_tr.png',
					'titleimage' : '',
					'op5' : {
						'id' : '541'
					},
					'op6' : {
						'id' : '601'
					}
				},
				'216' : {
					'name' : 'Прочие',
					'columns' : '4',
					'id' : '216',
					'image' : 'zkh_oth.png',
					'titleimage' : '',
					'op5' : {
						'id' : '539'
					},
					'op6' : {
						'id' : '545'
					},
					'op7' : {
						'id' : '591'
					},
					'op8' : {
						'id' : '597'
					},
					'op9' : {
						'id' : '596'
					},
					'op10' : {
						'id' : '603'
					}
				},
				'217' : {
					'name' : 'Водоснабжение',
					'columns' : '4',
					'id' : '217',
					'image' : 'zkh_vod1.png',
					'titleimage' : '',
					'op5' : {
						'id' : '599'
					},
					'op6' : {
						'id' : '991'
					},
					'op7' : {
						'id' : '1022'
					}
				},
				'218' : {
					'name' : 'Тепловые сети',
					'columns' : '4',
					'id' : '218',
					'image' : 'zkh_tep.png',
					'titleimage' : '',
					'op5' : {
						'id' : '599'
					},
					'op6' : {
						'id' : '600'
					}
				},
				'op12' : {
					'id' : '966'
				}
			},
			'107' : {
				'name' : 'Игры и развлечения',
				'columns' : '4',
				'id' : '107',
				'image' : 'main_fun.png',
				'titleimage' : '',
				'220' : {
					'name' : 'Xsolla',
					'columns' : '4',
					'id' : '220',
					'image' : 'xsl.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '748'
					},
					'op6' : {
						'id' : '783'
					},
					'op7' : {
						'id' : '784'
					},
					'op8' : {
						'id' : '785'
					},
					'op9' : {
						'id' : '786'
					},
					'op10' : {
						'id' : '787'
					},
					'op11' : {
						'id' : '788'
					},
					'op12' : {
						'id' : '789'
					},
					'op13' : {
						'id' : '790'
					},
					'op14' : {
						'id' : '791'
					},
					'op15' : {
						'id' : '792'
					},
					'op16' : {
						'id' : '793'
					},
					'op17' : {
						'id' : '794'
					},
					'op18' : {
						'id' : '795'
					},
					'op19' : {
						'id' : '797'
					},
					'op20' : {
						'id' : '798'
					},
					'op21' : {
						'id' : '799'
					},
					'op22' : {
						'id' : '800'
					},
					'op23' : {
						'id' : '801'
					},
					'op24' : {
						'id' : '802'
					},
					'op25' : {
						'id' : '803'
					},
					'op26' : {
						'id' : '804'
					},
					'op27' : {
						'id' : '805'
					},
					'op28' : {
						'id' : '806'
					},
					'op29' : {
						'id' : '807'
					},
					'op30' : {
						'id' : '808'
					},
					'op31' : {
						'id' : '809'
					},
					'op32' : {
						'id' : '810'
					},
					'op33' : {
						'id' : '811'
					},
					'op34' : {
						'id' : '812'
					},
					'op35' : {
						'id' : '813'
					},
					'op36' : {
						'id' : '832'
					},
					'op37' : {
						'id' : '833'
					},
					'op38' : {
						'id' : '834'
					},
					'op39' : {
						'id' : '835'
					},
					'op40' : {
						'id' : '836'
					},
					'op41' : {
						'id' : '837'
					},
					'op42' : {
						'id' : '839'
					},
					'op43' : {
						'id' : '920'
					},
					'op44' : {
						'id' : '931'
					},
					'op45' : {
						'id' : '932'
					},
					'op46' : {
						'id' : '933'
					},
					'op47' : {
						'id' : '934'
					},
					'op48' : {
						'id' : '935'
					},
					'op49' : {
						'id' : '936'
					},
					'op50' : {
						'id' : '937'
					},
					'op51' : {
						'id' : '938'
					},
					'op52' : {
						'id' : '939'
					},
					'op53' : {
						'id' : '940'
					},
					'op54' : {
						'id' : '941'
					},
					'op55' : {
						'id' : '942'
					},
					'op56' : {
						'id' : '943'
					},
					'op57' : {
						'id' : '944'
					},
					'op58' : {
						'id' : '945'
					},
					'op59' : {
						'id' : '946'
					},
					'op60' : {
						'id' : '947'
					},
					'op61' : {
						'id' : '948'
					},
					'op62' : {
						'id' : '949'
					},
					'op63' : {
						'id' : '950'
					},
					'op64' : {
						'id' : '951'
					},
					'op65' : {
						'id' : '952'
					},
					'op66' : {
						'id' : '953'
					},
					'op67' : {
						'id' : '954'
					},
					'op68' : {
						'id' : '955'
					},
					'op69' : {
						'id' : '956'
					},
					'op70' : {
						'id' : '957'
					},
					'op71' : {
						'id' : '958'
					},
					'op72' : {
						'id' : '959'
					}
				},
				'221' : {
					'name' : 'GameXP',
					'columns' : '4',
					'id' : '221',
					'image' : 'nik_gamexp.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '765'
					},
					'op6' : {
						'id' : '766'
					},
					'op7' : {
						'id' : '768'
					},
					'op8' : {
						'id' : '767'
					},
					'op9' : {
						'id' : '769'
					},
					'op10' : {
						'id' : '770'
					},
					'op11' : {
						'id' : '771'
					},
					'op12' : {
						'id' : '772'
					},
					'op13' : {
						'id' : '773'
					},
					'op14' : {
						'id' : '774'
					},
					'op15' : {
						'id' : '775'
					}
				},
				'op7' : {
					'id' : '875'
				},
				'op8' : {
					'id' : '631'
				},
				'op9' : {
					'id' : '636'
				},
				'op10' : {
					'id' : '635'
				},
				'op11' : {
					'id' : '906'
				}
			},
			'108' : {
				'name' : 'Электронные кошельки и переводы',
				'columns' : '4',
				'id' : '108',
				'image' : 'main_ec.png',
				'titleimage' : '',
				'op5' : {
					'id' : '921'
				},
				'op6' : {
					'id' : '917'
				},
				'op7' : {
					'id' : '678'
				},
				'op8' : {
					'id' : '963'
				},
				'op9' : {
					'id' : '652'
				},
				'op10' : {
					'id' : '815'
				},
				'op11' : {
					'id' : '964'
				}
			},
			'109' : {
				'name' : 'Косметика, штрафы и прочее',
				'columns' : '2',
				'id' : '109',
				'image' : 'main_oth.png',
				'titleimage' : 'main_platej_ico.gif',
				'222' : {
					'name' : 'Службы Такси',
					'columns' : '4',
					'id' : '222',
					'image' : 'ohr_taxi.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '825'
					},
					'op6' : {
						'id' : '895'
					},
					'op7' : {
						'id' : '899'
					},
					'op8' : {
						'id' : '776'
					},
					'op9' : {
						'id' : '905'
					},
					'op10' : {
						'id' : '960'
					},
					'op11' : {
						'id' : '993'
					},
					'op12' : {
						'id' : '1024'
					}
				},
				'223' : {
					'name' : 'Косметика',
					'columns' : '2',
					'id' : '223',
					'image' : 'ohr_kosm.gif',
					'titleimage' : 'main_internet_utk.gif',
					'op5' : {
						'id' : '886'
					},
					'op6' : {
						'id' : '536'
					},
					'op7' : {
						'id' : '632'
					},
					'op8' : {
						'id' : '641'
					},
					'op9' : {
						'id' : '1008'
					}
				},
				'op7' : {
					'id' : '1010'
				},
				'227' : {
					'name' : 'Оплата за детский сад',
					'columns' : '4',
					'id' : '227',
					'image' : 'ohr_detsad.gif',
					'titleimage' : '',
					'225' : {
						'name' : 'г. Краснодар',
						'columns' : '4',
						'id' : '225',
						'image' : 'ohr_detsad.gif',
						'titleimage' : '',
						'op5' : {
							'id' : '827'
						},
						'op6' : {
							'id' : '828'
						},
						'op7' : {
							'id' : '840'
						}
					},
					'228' : {
						'name' : 'Прочие',
						'columns' : '4',
						'id' : '228',
						'image' : 'ohr_detsad.gif',
						'titleimage' : '',
						'op5' : {
							'id' : '913'
						},
						'op6' : {
							'id' : '1020'
						},
						'op7' : {
							'id' : '1021'
						}
					}
				},
				'op9' : {
					'id' : '756'
				},
				'op10' : {
					'id' : '829'
				},
				'op11' : {
					'id' : '929'
				},
				'op12' : {
					'id' : '743'
				},
				'op13' : {
					'id' : '531'
				},
				'op14' : {
					'id' : '532'
				},
				'op15' : {
					'id' : '901'
				},
				'op16' : {
					'id' : '903'
				},
				'op17' : {
					'id' : '988'
				},
				'op18' : {
					'id' : '997'
				},
				'229' : {
					'name' : 'Прочие',
					'columns' : '4',
					'id' : '229',
					'image' : 'ohr_psych.gif',
					'titleimage' : '',
					'op5' : {
						'id' : '998'
					},
					'op6' : {
						'id' : '1023'
					}
				}
			}
		}
	},
	'whitelist' : '',
	'blacklist' : ''
};
/*  - - - - - всегда в true, для динамического include файла */
var $iface_config_js = 'true';
