var $ga_jcfg = {
	'config' : {
		'IgnoredCheckErrorsList' : '',
		'CurrencyName' : '���.',
		'CurrencyType' : 'RUR',
		'OutOfOrderPassword' : '1234',
		'InterfaceSoundVolume' : '-1',
		'NoChangeMessage' : '1',
		'ShowTitleScreen' : '0',
		'ShowAutodetectWarning' : '0',
		'TerminalName' : '99999',
		'SupportString' : 'T������ ������������: [b]+7 (800) 100-800-3, � 9:00 �� 20:00[/b][br]e-mail: [b]info@forwardmobile.ru[/b]',
		'MainMenuMarqueeString' : '�� ���������� ������� ��������� ��������.',
		'MainMenuBanner' : '0',
		'SkinName' : 'metro2'
	},
	'operators' : {
		'999' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '����� ���������',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'check_in_local_base' : '1',
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! �������� ����� ������������� ��������� �� ���������� ���� ������ ��������![/b]'
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
			'name' : '��� ����',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-800-333-0890',
			'dog' : '2/��1/04.06 �� 14.04.2006 �',
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
			'name' : '������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : '�182/2 �� 01.07.2008 �.',
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
			'name' : '�������',
			'comment' : '��� + ������ ���������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0500',
			'dog' : '�-2006-19 �� 15.05.2006 �.',
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
			'name' : '������ ������',
			'comment' : '��� 902,904,908',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������ ���������',
			'comment' : '��� 902',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '������ ���������',
			'comment' : '��� 902,904,908',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '������ ���������',
			'comment' : '��� 902, 908, 8512',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������ ���������',
			'comment' : '��� 902, 908, 8512',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������ �����',
			'comment' : '��� 908',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '�������� ������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������� �������',
			'image' : 'mob_corbina.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� �������� �����',
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
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '���� 2',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '611',
			'dog' : '��� 12/1, ��� 12/2, ��� 12/3, ��� 12/4, ��� 12/5, ��� 12/6, ��� 12/7, ��� 12/8, ��� 12/9, ��� 12/10, ��� 12/11, ��� 12/12, ��� 12/13, ��� 12/14, ��� 12/15, ��� 12/16, ��� 12/17, ��� 12/18, ��� 12/19, ��� 12/20, ��� 12/21, ��� 12/22, ��� 12/23, ��� 12/24,',
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
			'name' : '���',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '��� ������ ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '�����',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������� �������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������-�������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '��������������',
			'image' : 'mob_metrotel.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '������� ������� ��������',
			'image' : 'int_corbina.gif',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� �����',
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
			'name' : '���+',
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
					'name' : '����� �������� �����',
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
			'dog' : '252/1-09 �� 25.12.2009',
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
			'name' : '������ ��',
			'image' : 'tel_kosmos-tv.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� �������� �����',
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
			'name' : '����� �������',
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
					'name' : '����� �����'
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
			'dog' : '004-���/���-01/11 �� 01.01.11 �.',
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
			'name' : '����',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '������',
			'image' : 'mob_indigo.gif',
			'limit' : {
				'min' : '1',
				'max' : '10000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '�������� �����-���������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '�������� ������ ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '�������� ������������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '�������� ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '�������� ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '�������� ���������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(861) 211-99-11',
			'dog' : '63/1 �� 11.06.2007�. (�.�.�2 �� 13.01.09)',
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
			'name' : '��������� GSM',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
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
			'name' : '�������',
			'image' : 'mob_kodotel.gif',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (****) **-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '��������� (���������� ����)',
			'image' : 'mob_dalsvyaz.gif',
			'limit' : {
				'min' : '10',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				},
				'101' : {
					'id' : '101',
					'type' : 'enum',
					'name' : '��� �������',
					'enum' : '',
					'enum' : {
						'1' : '���������',
						'3' : '��� (���)',
						'4' : '���',
						'10' : '���������'
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
			'name' : '�������������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������ ONLINE',
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
					'name' : '����� ��������'
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
			'name' : '������',
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
					'name' : '����� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������ ���������',
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
					'name' : '��� ��� �����',
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
			'dog' : '28/11 �� 28.12.2011 �.',
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
			'name' : '������ ��������',
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
					'name' : '����� �������� ��� ��� ��� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 219-52-22',
			'dog' : '28/11 �� 28.12.2011 �.',
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
			'name' : '�������������',
			'limit' : {
				'min' : '1',
				'max' : '5000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'klava' : 'lat',
					'name' : '����� �����',
					'comment' : '[b]��������!!![/b] ����� ����� ����� �������� �� [b]����[/b], [b]���������[/b] � [b]���������[/b] [b]���������[/b] ����.'
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
			'name' : '���������� - ��������� ��',
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
					'name' : '����� ��������',
					'comment' : '[b]��������![/b] ����� �������� �� "[b]1[/b]" �� "[b]5[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8(861) 2-733-633',
			'dog' : '02-��-08 �� 13.03.2008 �',
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
					'name' : '����� �����',
					'comment' : '[b]��������![/b] ����� �������� �� "[b]1[/b]" �� "[b]6[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495) 223-46-77',
			'dog' : '��-1 �� 11.08.2009 �.',
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
			'name' : '�����',
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
					'name' : '����� ��������',
					'comment' : '[b]��������![/b] ����� �������� �� "[b]1[/b]" �� "[b]9[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8(861) 299-00-09',
			'dog' : '�01/11-07',
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
			'name' : '��� ���������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������',
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
					'name' : '����� �����',
					'comment' : '[b]��������!!![/b] ����� ����� ������� �� [b]����[/b].'
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
			'dog' : '168/��/09 �� 23.07.2009 �.',
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
			'name' : '������ ��������',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'klava' : 'lat',
					'name' : '����� �����',
					'comment' : '[b]��������!!![/b] ����� ����� ����� �������� �� [b]����[/b], [b]���������[/b] � [b]���������[/b] [b]���������[/b] ����.'
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
			'name' : '������ �������� ���',
			'limit' : {
				'min' : '1',
				'max' : '15000'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'text',
					'klava' : 'lat',
					'name' : '����� �����',
					'comment' : '[b]��������!!![/b] ����� ����� ����� �������� �� [b]����[/b], [b]���������[/b] � [b]���������[/b] [b]���������[/b] ����.'
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
					'name' : '��������������� �����',
					'comment' : '[b]��������![/b] ��������������� ����� ��"[b]5[/b]" �� "[b]7[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
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
					'name' : '����� �����',
					'mask' : '372********',
					'comment' : '[b]��������![/b] ����� �����"[b]11[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '���������������',
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
					'name' : '����� �������� ����� ��� PAN',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : '��������� �������� ��������',
					'mask' : '******'
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : '�������� �������� ��������',
					'mask' : '******'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "��� - ���������"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �� ������� ������������ ������. �������� 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "��������������� ��������" �.���������',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� ������-2000 �� �/� ...0013',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '�� ��� �32',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �� ������� ������������ ������. �������� 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				},
				'104' : {
					'id' : '104',
					'type' : 'enum',
					'name' : '�������� ��� �������',
					'enum' : '',
					'enum' : {
						'662' : '���������',
						'663' : '������������ ����� (������ ����������)',
						'664' : '�������������, ������������� �����(���)',
						'665' : '��������'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "���������� ��������"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �� ������� ������������ ������. �������� 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "�� ���������� ��������"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �� ������� ������������ ������. �������� 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "���������� �������� ����"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �� ������� ������������ ������. �������� 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "�����-������"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �� ������� ������������ ������. �������� 01.2007',
					'mask' : '**.****'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� ������-2000 �� �/� ...0014',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '"���������-11" ("���. ����. ����")',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '"���������-11" ("������ ������")',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "������ ��� �.������"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� �.�������� "������"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '�� "�� ���. � ����. ������ �����"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��.���������� ��� "��������. ���������"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� "������������ �������. � ����. ����"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������ �� ����� ����� - �� "������ �����"',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������ ��� "���� ������" (�.���������)',
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
					'name' : '����� �������� ����� ��� PAN',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� ������� �. ������� ����',
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
					'name' : '����� �����',
					'mask' : '******'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/��������: ([^<]*)/#]',
						'description' : '��������'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/����� � ������: ([^<]*)/#]',
						'description' : 'C���� � ������'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'inn_for_cheque' : '2305024465',
			'name_for_cheque' : '(86159) 3-66-44',
			'dog' : '1/11, 2/11 �� 18.03.11�.',
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
			'name' : '��������� ���������',
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
					'name' : '������������� ���������',
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
			'dog' : '05/�� �� 21.07.2009 �.',
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
					'name' : '����� ����������',
					'mask' : '********************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
					'name' : '����� ��������',
					'mask' : '***********',
					'comment' : '[b]��������![/b] ����� �������� "[b]11[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
					'name' : '�����'
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
			'name' : '���������.��',
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
					'name' : '����� ID � �������',
					'mask' : '************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������ WiFi',
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
					'name' : '����� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : '�182/2 �� 01.07.2008 �.',
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
			'name' : '������ ��������',
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
					'name' : '����� ��������',
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
			'dog' : '�182/2 �� 01.07.2008 �.',
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
			'name' : '��������� EdelStar (��������� �����)',
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
					'name' : '����� ID � �������',
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
			'name' : '������ ��',
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
					'name' : '����� ��������',
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
			'dog' : '�182/2 �� 01.07.2008 �.',
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
			'name' : '������ ��������� ������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : '�182/2 �� 01.07.2008 �.',
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
			'name' : '��� ��� ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0890',
			'dog' : '2/��1/04.06 �� 14.04.2006 �',
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
			'name' : '������ ��� ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : '�182/2 �� 01.07.2008 �.',
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
			'name' : '������� ��� ��������',
			'comment' : '��� + ������ ���������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0500',
			'dog' : '�-2006-19 �� 15.05.2006 �.',
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
			'name' : '���� 2 ��� ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '611',
			'dog' : '��� 12/1, ��� 12/2, ��� 12/3, ��� 12/4, ��� 12/5, ��� 12/6, ��� 12/7, ��� 12/8, ��� 12/9, ��� 12/10, ��� 12/11, ��� 12/12, ��� 12/13, ��� 12/14, ��� 12/15, ��� 12/16, ��� 12/17, ��� 12/18, ��� 12/19, ��� 12/20, ��� 12/21, ��� 12/22, ��� 12/23, ��� 12/24,',
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
			'name' : '�������',
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
					'name' : '����� ��������',
					'comment' : '����� �������� ������� �� [b]11[/b] ��� [b]12[/b] ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '����������� ���, ������, �������',
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
					'name' : '����� ��������',
					'comment' : '����� �������� ������� �� [b]11[/b] ��� [b]12[/b] ����.'
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
			'name' : '����������� ����2',
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
					'name' : '����� ��������',
					'comment' : '����� �������� ������� �� [b]11[/b] ��� [b]12[/b] ����.'
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
			'name' : '����� ���������� � �������',
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
					'name' : '����� ������������� �������� (�������� A000AA93).',
					'comment' : '[b]��������! �������:[/b]������������� ����, �������������� ����, ���������� ������, ��������� �������, �������� �������, ����������� �������.'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : '����� ������������� �����. (�������� 00AA000000).',
					'comment' : '[b]��������! �������:[/b]������������� ����, �������������� ����, ���������� ������, ��������� �������, �������� �������, ����������� �������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : ''
			},
			'name_for_cheque' : '8612340992',
			'dog' : '�� 06/08 �� 03.08.2010 �.',
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
			'name' : '����� ��������� ��� ������ ������',
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
					'name' : '����� �������������.',
					'comment' : '[b]��������! �������:[/b]������������� ����, �������������� ����, ���������� ������, ��������� �������, �������� �������, ����������� �������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '��������� ��� ������'
				},
				'show_properties' : ''
			},
			'name_for_cheque' : '8612340992',
			'dog' : '�� 06/08 �� 03.08.2010 �.',
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
					'name' : '����� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495)648-68-58',
			'dog' : '1062701/09 �� 26.10.2009 �.',
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
			'name' : '������.RU',
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
					'name' : '����� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495)743-49-85',
			'dog' : '59 �� 01.11.2009 �.',
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
					'name' : '����� ����� ��� ��������',
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
			'dog' : '2-04/12-09-� �� 04.12.2009 �.',
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
			'name' : '����������������',
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
					'name' : '�� ��� �������',
					'enum' : '',
					'enum' : {
						'SERVICE' : '������ �� ��������������',
						'PENY' : '������ ������� � ����'
					}
				},
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : '������� ����',
					'comment' : '������� ������� ����.'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : '����� ���������',
					'comment' : '������� ����� ���������.'
				},
				'102' : {
					'id' : '102',
					'maxlength' : '10',
					'minlength' : '0',
					'type' : 'integer',
					'name' : '������� �������� ��������',
					'comment' : '������� ������� �������� ��������'
				},
				'104' : {
					'id' : '104',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'dog' : '2010-1 �� 10.02.2010 �',
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
			'name' : '��� "�����-����"',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '������� ����',
					'mask' : '********************',
					'comment' : '[b]��������! ������� ���� 20 ����.[/b]'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '����� ����� �� ���',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '��� "�����-����"',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �����',
					'mask' : '****************',
					'comment' : '[b]��������! ����� ����� 16 ����.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���� �������� � ������� ����',
					'mask' : '****',
					'comment' : '���� �������� ����� � ������� ����'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '��� "��� ����"',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '������� ����',
					'mask' : '********************',
					'comment' : '[b]��������! ������� ���� 20 ����.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '15',
					'name' : '����� ���������� ��������',
					'comment' : '������� ����� ���������� ��������'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : '�������, ��� � �������� ��������',
					'comment' : '�������, ��� � �������� ��������'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '�������, ��� � �������� �����������',
					'comment' : '�������, ��� � �������� �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '��� "��� ����"',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '������� ����',
					'mask' : '********************',
					'comment' : '[b]��������! ������� ���� 20 ����.[/b]'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : '�������, ��� � �������� ��������',
					'comment' : '�������, ��� � �������� ��������'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '�������, ��� � �������� �����������',
					'comment' : '�������, ��� � �������� �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������� ��������',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).[br]'
				},
				'101' : {
					'id' : '101',
					'type' : 'enum',
					'name' : '�������� ��� �������',
					'enum' : '',
					'enum' : {
						'1' : '������ �� ������ ��������',
						'2' : '������ �� ������ �����',
						'3' : '������ �� ������ �����'
					}
				},
				'102' : {
					'id' : '102',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : '������� ����� ���. ��� ����� �����,��� ����� �����',
					'comment' : '[b]������� ����� �������� ��� ����� �����, ��� ����� �����. ��������! �������� �������� ������� �� ���������� "���� �������"![/b][br]'
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b].[br]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '��������� ����',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).[br]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� �����',
					'mask' : '********************',
					'comment' : '[b]��������! ������� ���� 20 ����.[/b][br]'
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b].[br]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '����� �����',
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
					'name' : '��� �����',
					'comment' : '������� ��� ����� (������ �� ���������).'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '������� ����',
					'mask' : '********************',
					'comment' : '[b]��������! ������� ���� 20 ����.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : '����� ���������� ��������',
					'comment' : '������� ����� ���������� ��������'
				},
				'106' : {
					'id' : '106',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '����� �������� �������� ��� [b]8[/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : '�������, ��� � �������� ��������',
					'comment' : '�������, ��� � �������� ��������'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '�������, ��� � �������� �����������',
					'comment' : '�������, ��� � �������� �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '����� �����',
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
					'name' : '������� ��� �������� ��������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������ ��',
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
					'name' : '����� �����'
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
			'dog' : '168/��/09 �� 23.07.2009 �.',
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
			'name' : '�������� ������ �� ����',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '����� ������ �������',
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
					'name' : '����� �������������',
					'comment' : '[b]�������� 00��000000[/b].'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���� ���������',
					'mask' : '**.**.****',
					'comment' : ''
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '����� ������������� �����',
					'mask' : '***********',
					'comment' : ''
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : '��� �������������',
					'mask' : '**********',
					'comment' : ''
				},
				'104' : {
					'id' : '104',
					'type' : 'masked',
					'name' : '��� �������������',
					'mask' : '********************',
					'comment' : ''
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '��� � �������� �����������',
					'comment' : ''
				},
				'107' : {
					'id' : '107',
					'type' : 'text',
					'name' : '������� �����������',
					'comment' : ''
				},
				'108' : {
					'id' : '108',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '����� ������ �������',
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
					'name' : '������� �����������',
					'mask' : '8 (***) ***-****',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��������� ��',
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
					'name' : '����� ��������',
					'comment' : '[b]��������![/b] ����� �������� "[b]11[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-200-6',
			'dog' : '�� -1/12/09 �� 15.12.2009',
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
			'name' : '��� "����"',
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
					'name' : '����� �������� �����.',
					'mask' : '************'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8[/b].'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : '��� � �������� �����������',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : '������� �����������',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������',
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
					'name' : '�/� ��������. ��������: 00-A0-0000',
					'comment' : '[b]� ������ �/� ������ ��������� A ��������� �������: F,T,V.[/b]".'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-****',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (861) 275-27-27',
			'dog' : '01 �� 28.07.2010 �.',
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
			'name' : '�������� �� ������ ����',
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
					'name' : '������� ����� ������������ �������� ��� ���������',
					'comment' : '[b]��������![/b] ����� "[b]12[/b]" ��� "[b]14[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 �� 01.11.2009 �',
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
			'name' : '�������� �� ����� �������',
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
					'name' : '������� ����� ������������ �������� ��� ���������',
					'comment' : '[b]��������![/b] ����� "[b]12[/b]" ��� "[b]14[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 �� 01.11.2009 �',
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
			'name' : '�������� �� ����� ������',
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
					'name' : '������� ����� ������������ �������� ��� ���������',
					'comment' : '[b]��������![/b] ����� "[b]12[/b]" ��� "[b]14[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 �� 01.11.2009 �',
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
			'name' : '������������',
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
					'name' : '����� �������� ��� �/�',
					'mask' : '****************',
					'comment' : '������� �����'
				},
				'104' : {
					'id' : '104',
					'type' : 'enum',
					'name' : '�������� ������',
					'enum' : '',
					'enum' : {
						'1667' : '����������',
						'1668' : '�����������',
						'1669' : '�����������'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������������ ������ ���',
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
					'name' : '����� �������� ��� �/�',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������������ ������ ����������',
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
					'name' : '����� �������� ��� �/�',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������������',
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
					'name' : '����� �������� ��� �/�',
					'mask' : '****************',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������������ ������ ���',
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
					'name' : '����� �������� ��� �/�',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������������ ������ ����������',
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
					'name' : '����� �������� ��� �/�',
					'mask' : '****************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������������',
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
					'name' : '����� �������� �����',
					'comment' : '������� ����� �������� �����'
				},
				'101' : {
					'id' : '101',
					'type' : 'enum',
					'name' : '�������� ������',
					'enum' : '',
					'enum' : {
						'9' : '������������� ����',
						'33' : '����������� �������',
						'24' : '������� �������'
					}
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : '�������� ��������',
					'mask' : '******'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '(�) �������, ���������',
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
					'name' : '����� ��������',
					'mask' : '8(***)***-**-**',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '������ ��� �������. ������',
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
					'name' : '����� ��������',
					'mask' : '8(***)***-**-**',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '�����',
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
					'name' : '����� �����',
					'mask' : '8(***)***-**-**',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
					'name' : '����� ��������',
					'mask' : '8(***)***-**-**',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '�������',
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
					'name' : '����� �������� �����',
					'mask' : '8(***)***-**-**',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
					'name' : '����� �������� �����',
					'mask' : '8(***)***-**-**',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
					'name' : 'SIP-�����',
					'mask' : '8(***)***-**-**',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
					'name' : '����� �����',
					'mask' : '****************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '��� ���������� �������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� ���������� ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� ����������� �������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� �������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '����� "������"',
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
					'name' : '������� ����',
					'comment' : '������� ������� ����.'
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
			'name' : '����� "������"',
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
					'name' : '������� ����',
					'comment' : '������� ������� ����.'
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
					'name' : '����� �������� ��� ��� ��� ��������.',
					'comment' : '[b]��������![/b] ��������: ��������� ������ pin ���, �������: ������ ����� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (812) 643-10-20',
			'dog' : '18 �� 01.10.2010 �.',
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
					'name' : '����� �/�',
					'mask' : '*****',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
					'name' : '����� �/�',
					'mask' : '************',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '"�������" ��������',
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
					'name' : '����� ��������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 266-82-13',
			'dog' : '02/11 �� 02 ������ 2010 �.',
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
			'name' : '"�������" ��������� ��',
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
					'name' : '����� ��������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 266-82-13',
			'dog' : '02/11 �� 02 ������ 2010 �.',
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
			'name' : '�����:������������',
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
			'name' : '�����',
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
			'name' : '����� II �����',
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
			'name' : '���������',
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
			'name' : '���������� ��������',
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
			'name' : '��� 3',
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
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
					'name' : '������� ���� ID �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]�� ������ ������ ���� ID �������� SMS � ������� GXP ���_����� �� ����� 1231. ��������� �� www.GameXP.ru[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (495) 788-7936',
			'dog' : '�� 101021-�� 03 �� 21.10.2010 �.',
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
			'name' : '����� "����"',
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
					'name' : '������� ���� �������� �� 1 �� 9 ����',
					'mask' : '8 (***) ***-**-**'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '������� ���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(861)252-33-06',
			'dog' : '02/15 �� 15.11.2010',
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
			'name' : '������������ �����',
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
					'name' : '����� �����',
					'comment' : '[b]��������! ����� �������� ��� 8.[/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8.[/b]'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '2',
					'maxlength' : '3',
					'name' : '�������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '-',
			'dog' : '��-101217 �� 17.12.2010',
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
			'name' : '�������',
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
					'name' : '����� �������� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 299-20-21',
			'dog' : '07/12 �� 07.12.2010 �.',
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
					'name' : '����� �����',
					'mask' : '****************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� �������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ������� �������������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������� ���-�����',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����� ����� � �����',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ��� ���������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������� ���-�����',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '11�11 ���������� ��������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������� ���-�������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������������� �����',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '�����������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ����� �����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������ ������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� �������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '����� �����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '����� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '����� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '����� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '����� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '����� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����� ����������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '����� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������� �������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '���� �������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '��� �������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����� ������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '�����������',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'mask' : '****************',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '����� ����� ��� ��������',
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
			'dog' : '2-04/12-09-� �� 04.12.2009 �.',
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
					'name' : '������� ����� �������� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! �� ����������� ������ ����� ��� �������� (Yota). ������� ����� �������� ��������[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 800 700-55-00',
			'dog' : '2-04/12-09-� �� 04.12.2009 �.',
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
			'name' : '������-�������',
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
					'name' : '����� �����',
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
			'dog' : '24/01 �� 24.01.2011 �.',
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
			'name' : '���� ������',
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
					'name' : '����� ��������',
					'mask' : '��-*****'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : 'support@taiget.ru',
			'dog' : '�101122 �� 22.11.2010 �.',
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
			'name' : '�������� ������',
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
					'name' : '������� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '+7 (861) 255-37-98',
			'dog' : '16/03 �� 16.03.2011 �.',
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
			'name' : '��� "��� ���"',
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
					'name' : '������� ����',
					'mask' : '****************'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '(861) 220-76-73',
			'dog' : '15/03 �� 15.03.11�.',
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
			'name' : '�������� �� ����� "��� ������"',
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
					'name' : '������� ����� ������������ �������� ��� ���������',
					'comment' : '[b]��������![/b] ����� "[b]12[/b]" ��� "[b]14[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 �� 01.11.2009 �',
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
			'name' : '����������',
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
					'name' : '����� �����',
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
			'dog' : '05/11 �� 05.05.11',
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
			'name' : '������������',
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
					'name' : '������� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(8772) 56-36-68',
			'dog' : '15/04 �� 20.04.11',
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
			'name' : '����� ������',
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
					'name' : '����� �����',
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
			'dog' : '18/11 �� 18.08.2011',
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
			'name' : '������������ �����',
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
					'name' : '����� �������� �����',
					'mask' : '****************',
					'comment' : ''
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-800-3',
			'dog' : '�230/�� �� 12.12.2011�.,�183/�� �� 13.12.2011�.,�191/�� �� 26.12.2011�.,�197/�� �� 13.12.2011�.,�93/�� �� 15.12.2011�. ,�1/�� �� 20.12.2011 �. ,�113/�� �� 26.12.2011�.,�132/�� �� 22.12.2011�.,�213/�� �� 26.12.2011�.,�106/�� ��20.12.2011�. ,�109/�� �� 20.12.2011�.,�111/�� �� 01.12.2011�.,�112/�� ��20.12.2011�. ,�116/�� �� 20.12.2011�.,�138/�� ��1.12.2011 �. ,�15/�� �� 20.12.2011 �.,�16/�� �� 27.01.2012�.,�162/�� �� 20.12.2011�.,�163/�� �� 20.12.2011�.,�167/�� �� 01.12.2011�.,�17/�� �� 20.12.2011�.,�179/�� �� 01.12.2011�.,�18/�� �� 1.12.2011�.,�184/�� �� 01.12.2011�.,�190/�� �� 26.12.2011�.,�195/�� ��1.12.2011 �. ,�2/�� �� 20.12.2011�. ,�20/�� �� 20.12.2011�. ,�205/�� �� 20.12.2011�.,�206/�� �� 20.12.2011�.,�211/�� �� 20.12.2011�.,�215/����20.12.2011 �. ,�219/�� �� 20.12.2011�.,�220/�� �� 20.12.2011�.,�222/�� �� 20.12.2011�.,�223/�� �� 20.12.2011�.,�224/�� �� 20.12.2011�.,�225/����26.12.2011 �. ,�226/�� �� 19.12.2012�.,�227/�� �� 19.12.2011�.,�234/�� �� 01.12.2011�.,�26/�� ��27.01.2012 �. ,�3/�� �� 1.12.2011 �. ,�33/�� ��19.12.2011 �. ,�34/�� �� 20.12.2011�.,�35/�� �� 20.12.2011�. ,�36/�� �� 20.12.2011�. ,�38/�� �� 27.01.2012�.,�41/�� �� 20.12.2011�. ,�43/�� �� 20.12.2011�. ,�48/�� �� 22.12.2011�. ,�50/�� ��20.12.2011 �. ,�53/�� �� 26.12.2011�.,�54/�� �� 20.12.2011�. ,�55/�� ��20.12.2011 �. ,�57/�� ��20.12.2011 �. ,�60/�� �� 27.01.2012�.,�61/�� ��27.01.2012 �. ,�66/�� ��1.12.2011 �. ,�7/�� �� 20.12.2011�.,�75/�� �� 20.12.2011�. ,�79/�� �� 20.12.2011�. ,�85/�� �� 20.12.2011�. ,�88/�� �� 20.12.2011�. ,�91/�� �� 20.12.2011�. ,�97/�� �� 20.12.2011�.,�99/�� �� 20.12.2011�.,�161/�� �� 17.01.2012�.,�5/�� �� 20.12.2011�.,�68/�� �� 20.12.2011�.,�101/�� ��20.12.2011�. ,�115/�� �� 22.12.2011�.,�131/�� �� 01.12.2011�.,�23/�� �� 20.12.2011�.,�135/�� �� 12.12.2011�.,�164/�� �� 17.01.2012�.,�31/�� �� 29.11.2011�.,�39/�� �� 22.12.2011�.,�84/�� �� 22.12.2011�. ,�92/�� �� 26.12.2011�. ,�124/�� �� 29.12.2011�.,�139/�� �� 29.12.2011�.,�168/�� �� 20.12.2011�.,�169/�� �� 26.12.2011�.,�228/�� �� 20.12.2011�.,�70/�� �� 29.12.2011�. ,�173/�� �� 19.12.2011�.,�232/�� �� 20.12.2011�.,�137/����20.12.2011 �. ,�145/�� �� 01.12.2011�.,�146/�� �� 06.12.2011�.,�147/�� �� 01.12.2011�.,�149/�� �� 08.12.2011�.,�150/�� �� 08.12.2011�.,�151/�� �� 01.12.2011�.,�152/�� �� 06.12.2011�.,�154/�� �� 08.12.2011�.,�155/�� �� 06.12.2011�.,�156/�� �� 08.12.2011�.,�158/�� �� 06.12.2011�.,�188/�� �� 20.12.2011�.,�25/�� �� 20.12.2011�. ,�76/�� �� 26.12.2011�.,�82/�� �� 26.12.2011�. ,�87/�� �� 20.12.2011 �.,�94/�� �� 20.12.2011�. ,�231/�� �� 06.09.2011�.,�143/�� �� 01.12.2011�.,�140/�� �� 01.12.2011�.,�72/�� �� 20.12.2011�.',
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
			'name' : '������ �������������� �����',
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
					'name' : '����� �������� �����',
					'mask' : '****************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-800-3',
			'dog' : '�230/�� �� 12.12.2011�.,�183/�� �� 13.12.2011�.,�191/�� �� 26.12.2011�.,�197/�� �� 13.12.2011�.,�93/�� �� 15.12.2011�. ,�1/�� �� 20.12.2011 �. ,�113/�� �� 26.12.2011�.,�132/�� �� 22.12.2011�.,�213/�� �� 26.12.2011�.,�106/�� ��20.12.2011�. ,�109/�� �� 20.12.2011�.,�111/�� �� 01.12.2011�.,�112/�� ��20.12.2011�. ,�116/�� �� 20.12.2011�.,�138/�� ��1.12.2011 �. ,�15/�� �� 20.12.2011 �.,�16/�� �� 27.01.2012�.,�162/�� �� 20.12.2011�.,�163/�� �� 20.12.2011�.,�167/�� �� 01.12.2011�.,�17/�� �� 20.12.2011�.,�179/�� �� 01.12.2011�.,�18/�� �� 1.12.2011�.,�184/�� �� 01.12.2011�.,�190/�� �� 26.12.2011�.,�195/�� ��1.12.2011 �. ,�2/�� �� 20.12.2011�. ,�20/�� �� 20.12.2011�. ,�205/�� �� 20.12.2011�.,�206/�� �� 20.12.2011�.,�211/�� �� 20.12.2011�.,�215/����20.12.2011 �. ,�219/�� �� 20.12.2011�.,�220/�� �� 20.12.2011�.,�222/�� �� 20.12.2011�.,�223/�� �� 20.12.2011�.,�224/�� �� 20.12.2011�.,�225/����26.12.2011 �. ,�226/�� �� 19.12.2012�.,�227/�� �� 19.12.2011�.,�234/�� �� 01.12.2011�.,�26/�� ��27.01.2012 �. ,�3/�� �� 1.12.2011 �. ,�33/�� ��19.12.2011 �. ,�34/�� �� 20.12.2011�.,�35/�� �� 20.12.2011�. ,�36/�� �� 20.12.2011�. ,�38/�� �� 27.01.2012�.,�41/�� �� 20.12.2011�. ,�43/�� �� 20.12.2011�. ,�48/�� �� 22.12.2011�. ,�50/�� ��20.12.2011 �. ,�53/�� �� 26.12.2011�.,�54/�� �� 20.12.2011�. ,�55/�� ��20.12.2011 �. ,�57/�� ��20.12.2011 �. ,�60/�� �� 27.01.2012�.,�61/�� ��27.01.2012 �. ,�66/�� ��1.12.2011 �. ,�7/�� �� 20.12.2011�.,�75/�� �� 20.12.2011�. ,�79/�� �� 20.12.2011�. ,�85/�� �� 20.12.2011�. ,�88/�� �� 20.12.2011�. ,�91/�� �� 20.12.2011�. ,�97/�� �� 20.12.2011�.,�99/�� �� 20.12.2011�.,�161/�� �� 17.01.2012�.,�5/�� �� 20.12.2011�.,�68/�� �� 20.12.2011�.,�101/�� ��20.12.2011�. ,�115/�� �� 22.12.2011�.,�131/�� �� 01.12.2011�.,�23/�� �� 20.12.2011�.,�135/�� �� 12.12.2011�.,�164/�� �� 17.01.2012�.,�31/�� �� 29.11.2011�.,�39/�� �� 22.12.2011�.,�84/�� �� 22.12.2011�. ,�92/�� �� 26.12.2011�. ,�124/�� �� 29.12.2011�.,�139/�� �� 29.12.2011�.,�168/�� �� 20.12.2011�.,�169/�� �� 26.12.2011�.,�228/�� �� 20.12.2011�.,�70/�� �� 29.12.2011�. ,�173/�� �� 19.12.2011�.,�232/�� �� 20.12.2011�.,�137/����20.12.2011 �. ,�145/�� �� 01.12.2011�.,�146/�� �� 06.12.2011�.,�147/�� �� 01.12.2011�.,�149/�� �� 08.12.2011�.,�150/�� �� 08.12.2011�.,�151/�� �� 01.12.2011�.,�152/�� �� 06.12.2011�.,�154/�� �� 08.12.2011�.,�155/�� �� 06.12.2011�.,�156/�� �� 08.12.2011�.,�158/�� �� 06.12.2011�.,�188/�� �� 20.12.2011�.,�25/�� �� 20.12.2011�. ,�76/�� �� 26.12.2011�.,�82/�� �� 26.12.2011�. ,�87/�� �� 20.12.2011 �.,�94/�� �� 20.12.2011�. ,�231/�� �� 06.09.2011�.,�143/�� �� 01.12.2011�.,�140/�� �� 01.12.2011�.,�72/�� �� 20.12.2011�.',
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
					'name' : '����� �������� �����',
					'mask' : '**************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : '���������� ������� �����������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ���  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8  (861) 200-10-00',
			'dog' : '16/09 �� 20.09.2011 �.',
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
			'name' : 'Exist (�� �������� �.�.)',
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
					'name' : '����� �������� �����',
					'mask' : '**************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : '���������� ������� �����������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ���  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8  (861) 200-10-00',
			'dog' : '16/09 �� 20.09.2011 �.',
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
			'name' : 'Exist (�� �������� �.�.)',
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
					'name' : '����� �������� �����',
					'mask' : '**************',
					'comment' : '1'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : '���������� ������� �����������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ���  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8  (862) 955-885',
			'dog' : '1 �� 28.10.2011',
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
					'name' : '��� �����������',
					'mask' : '****************',
					'comment' : '������� ��� �����������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'comment' : '������� Steam ID ��� email. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '��� ���������',
					'mask' : '****************',
					'comment' : '������� ��� ���������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '�������',
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
					'name' : '������� ���',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '������� ���',
					'mask' : '****************',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '������� ������� ����',
					'mask' : '****************',
					'comment' : '������� ������� ����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '��������� ���������',
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
					'name' : '������� ������������� ���������',
					'mask' : '****************',
					'comment' : '������� ������������� ���������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '��� �����',
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
					'name' : '������� ������������� ������������',
					'mask' : '****************',
					'comment' : '������� ������������� ������������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������)'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '���������� ������������� ����',
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
					'name' : '����� ��������',
					'mask' : '8 (861) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� ����',
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
					'name' : '����� ��������',
					'mask' : '8 (862) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� ������',
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
					'name' : '����� ��������',
					'mask' : '8 (877) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� ������-��-����',
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
					'name' : '����� ��������',
					'mask' : '8 (863) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� ���������-���������',
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
					'name' : '����� ��������',
					'mask' : '8 (878) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� �������������� ����',
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
					'name' : '����� ��������',
					'mask' : '8 (865) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� �������� ������',
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
					'name' : '����� ��������',
					'mask' : '8 (867) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� ���������, ���',
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
					'name' : '����� ��������',
					'mask' : '8 (879) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '���������� ��������',
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
					'name' : '����� ��������',
					'mask' : '8 (872) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '����������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : '��� ������',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '089',
			'dog' : '45 �� 18.02.2008 �.',
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
			'name' : '�������������',
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
					'name' : '������� ����� ��� �������',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '���',
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
					'name' : '����� �����',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '�����(������-�����������)',
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
					'name' : '����� ��������',
					'mask' : '*********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '����������� (TT-MOBILE)',
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
					'name' : '����� ��������',
					'mask' : '*********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '��������(����. �����)',
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
					'name' : '����� ��������',
					'mask' : '********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '��������(���. �����)',
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
					'name' : '����� ��������',
					'mask' : '********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
					'name' : '����� ��������',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
					'name' : '����� ��������',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : 'BEELINE (���������)',
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
					'name' : '����� ��������',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : 'ACTIV (���������)',
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
					'name' : '����� ��������',
					'mask' : '**********',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������������ (������)',
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
					'name' : '������� ����� ��� ����',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
					'name' : '����� �������� ����� �������',
					'comment' : '������ ������������ ����������� ����������  �������� (��������� ������) � ������ (�������� ����������� �������� "������������� ������� �������������� ����")  �� ������������� ������������ �������� �������  � �������������� ����� ����� � ������ �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '����. ������������� �� ������',
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
					'name' : '����� �������� �����',
					'mask' : '****************'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '10',
					'minlength' : '1',
					'type' : 'masked',
					'name' : '���������� ������� �����������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ���  [b]8[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-800-3',
			'dog' : '�230/�� �� 12.12.2011�.,�183/�� �� 13.12.2011�.,�191/�� �� 26.12.2011�.,�197/�� �� 13.12.2011�.,�93/�� �� 15.12.2011�. ,�1/�� �� 20.12.2011 �. ,�113/�� �� 26.12.2011�.,�132/�� �� 22.12.2011�.,�213/�� �� 26.12.2011�.,�106/�� ��20.12.2011�. ,�109/�� �� 20.12.2011�.,�111/�� �� 01.12.2011�.,�112/�� ��20.12.2011�. ,�116/�� �� 20.12.2011�.,�138/�� ��1.12.2011 �. ,�15/�� �� 20.12.2011 �.,�16/�� �� 27.01.2012�.,�162/�� �� 20.12.2011�.,�163/�� �� 20.12.2011�.,�167/�� �� 01.12.2011�.,�17/�� �� 20.12.2011�.,�179/�� �� 01.12.2011�.,�18/�� �� 1.12.2011�.,�184/�� �� 01.12.2011�.,�190/�� �� 26.12.2011�.,�195/�� ��1.12.2011 �. ,�2/�� �� 20.12.2011�. ,�20/�� �� 20.12.2011�. ,�205/�� �� 20.12.2011�.,�206/�� �� 20.12.2011�.,�211/�� �� 20.12.2011�.,�215/����20.12.2011 �. ,�219/�� �� 20.12.2011�.,�220/�� �� 20.12.2011�.,�222/�� �� 20.12.2011�.,�223/�� �� 20.12.2011�.,�224/�� �� 20.12.2011�.,�225/����26.12.2011 �. ,�226/�� �� 19.12.2012�.,�227/�� �� 19.12.2011�.,�234/�� �� 01.12.2011�.,�26/�� ��27.01.2012 �. ,�3/�� �� 1.12.2011 �. ,�33/�� ��19.12.2011 �. ,�34/�� �� 20.12.2011�.,�35/�� �� 20.12.2011�. ,�36/�� �� 20.12.2011�. ,�38/�� �� 27.01.2012�.,�41/�� �� 20.12.2011�. ,�43/�� �� 20.12.2011�. ,�48/�� �� 22.12.2011�. ,�50/�� ��20.12.2011 �. ,�53/�� �� 26.12.2011�.,�54/�� �� 20.12.2011�. ,�55/�� ��20.12.2011 �. ,�57/�� ��20.12.2011 �. ,�60/�� �� 27.01.2012�.,�61/�� ��27.01.2012 �. ,�66/�� ��1.12.2011 �. ,�7/�� �� 20.12.2011�.,�75/�� �� 20.12.2011�. ,�79/�� �� 20.12.2011�. ,�85/�� �� 20.12.2011�. ,�88/�� �� 20.12.2011�. ,�91/�� �� 20.12.2011�. ,�97/�� �� 20.12.2011�.,�99/�� �� 20.12.2011�.,�161/�� �� 17.01.2012�.,�5/�� �� 20.12.2011�.,�68/�� �� 20.12.2011�.,�101/�� ��20.12.2011�. ,�115/�� �� 22.12.2011�.,�131/�� �� 01.12.2011�.,�23/�� �� 20.12.2011�.,�135/�� �� 12.12.2011�.,�164/�� �� 17.01.2012�.,�31/�� �� 29.11.2011�.,�39/�� �� 22.12.2011�.,�84/�� �� 22.12.2011�. ,�92/�� �� 26.12.2011�. ,�124/�� �� 29.12.2011�.,�139/�� �� 29.12.2011�.,�168/�� �� 20.12.2011�.,�169/�� �� 26.12.2011�.,�228/�� �� 20.12.2011�.,�70/�� �� 29.12.2011�. ,�173/�� �� 19.12.2011�.,�232/�� �� 20.12.2011�.,�137/����20.12.2011 �. ,�145/�� �� 01.12.2011�.,�146/�� �� 06.12.2011�.,�147/�� �� 01.12.2011�.,�149/�� �� 08.12.2011�.,�150/�� �� 08.12.2011�.,�151/�� �� 01.12.2011�.,�152/�� �� 06.12.2011�.,�154/�� �� 08.12.2011�.,�155/�� �� 06.12.2011�.,�156/�� �� 08.12.2011�.,�158/�� �� 06.12.2011�.,�188/�� �� 20.12.2011�.,�25/�� �� 20.12.2011�. ,�76/�� �� 26.12.2011�.,�82/�� �� 26.12.2011�. ,�87/�� �� 20.12.2011 �.,�94/�� �� 20.12.2011�. ,�231/�� �� 06.09.2011�.,�143/�� �� 01.12.2011�.,�140/�� �� 01.12.2011�.,�72/�� �� 20.12.2011�.',
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
			'name' : '���� ���',
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
					'name' : '����� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/��������: ([^<]*)/#]',
						'description' : '��������'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/����� � ������: ([^<]*)/#]',
						'description' : 'C���� � ������'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'inn_for_cheque' : '2308091759',
			'name_for_cheque' : '(861) 216-83-08',
			'dog' : '193��-�� �� 21.11.2011 �.',
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
			'name' : '����',
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
					'name' : '��� �������',
					'enum' : '',
					'enum' : {
						'24' : '������',
						'32' : '�����',
						'13' : '���������',
						'17' : '�������',
						'31' : '�����������',
						'6' : '���������',
						'5' : '������� ����',
						'30' : '����������',
						'10' : '���������',
						'26' : '��������� - �������� ���������',
						'25' : '��������� - ����������� ���������',
						'28' : '��������� - ������������ ���������',
						'27' : '��������� - ����������� ���������',
						'21' : '���������',
						'9' : '������',
						'19' : '����������',
						'29' : '�������',
						'23' : '����������',
						'22' : '�����������',
						'16' : '������������ - �������������',
						'15' : '������������ - �������',
						'12' : '���������-�������',
						'14' : '��������',
						'8' : '������',
						'7' : '���������',
						'18' : '��������',
						'11' : '����-�������'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/��������: ([^<]*)/#]',
						'description' : '��������'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/����� � ������: ([^<]*)/#]',
						'description' : 'C���� � ������'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'inn_for_cheque' : '2308091759',
			'name_for_cheque' : '(861) 216-83-08',
			'dog' : '193��-�� �� 21.11.2011 �.',
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
			'name' : '�������� �������',
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
					'name' : '������� ����� �������� ��� �������� �����',
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
			'dog' : '�-2006-19 �� 15.05.2006 �.',
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
			'name' : '��� "�������"',
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
					'name' : '������� ����� �������� �����',
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
			'dog' : '09/11 �� 09.11.2011�.',
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
			'name' : '��� "���. ��������,�� � ���."',
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
					'name' : '�/� ��������.',
					'mask' : '***********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-250-08-90',
			'dog' : '��-54 �� 13 ���� 2010�.',
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
			'name' : '����-�������',
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
					'name' : '�/� ��������.',
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
			'dog' : '0111 �� 02.11.2011 �.',
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
			'name' : '����� "���"',
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
					'name' : '����� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (8622) 61-12-08',
			'dog' : '02/12 �� 02.03.2012�.',
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
			'name' : '�������������',
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
					'name' : '����� ��������',
					'mask' : '**********',
					'comment' : '[b]��������![/b] ����� �������� ���������� � "[b]086 ��� 087[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '0611',
			'dog' : '�182/2 �� 01.07.2008 �.',
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
			'name' : '������ ��������� ���',
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
					'name' : '����� ��������',
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
			'dog' : '28/11 �� 28.12.2011 �.',
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
			'name' : '��� "�����" (�����)',
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
					'name' : '����� �����',
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
			'dog' : '18/11 �� 18.11.2011 �.',
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
			'name' : '������� ������������ ������',
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
					'name' : '����� �������� �����',
					'comment' : '������� ����� �������� �����'
				},
				'102' : {
					'id' : '102',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '6',
					'name' : '�������� ��������',
					'mask' : '******'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '10',
					'name' : '���������� ������� ����������� (��� 8)',
					'mask' : '**********'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������ �� ���������',
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
					'name' : '����� ������������� �������� (�������� A000AA93).'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '4',
					'minlength' : '2',
					'type' : 'integer',
					'name' : '����� � ������',
					'comment' : '[b]��������![/b] ������� ����������� ����� ������".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ��������� ������������ ����� ������, �� ���� ����� ����� �������� ������� ��������� ������� [/b].'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 255-23-77',
			'dog' : '16/12 �� 16.04.2012 �.',
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
			'name' : '������ �� ������������',
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
					'name' : '����� ������������� �������� (�������� A000AA93).'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '4',
					'minlength' : '2',
					'type' : 'integer',
					'name' : '����� � ������',
					'comment' : '[b]��������![/b] ������� ����������� ����� ������".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ��������� ������������ ����� ������, �� ���� ����� ����� �������� ������� ��������� ������� [/b].'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 222-91-41',
			'dog' : '20/12 �� 20 ������� 2012 �.',
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
			'name' : '2���',
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
					'name' : '������� �����.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
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
			'dog' : '20/12 �� 20.04.2012 �.',
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
			'name' : '�������',
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
					'name' : '������� ����� �������� ��� �/�.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������������� ����������',
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
					'name' : '������� �����'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : '������� �������',
					'comment' : '[b]��������![/b] ������ �������".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 201-10-25',
			'dog' : '14/12 �� 14 ��� 2012 �.',
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
			'name' : '����� 777',
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
					'name' : '������� ���� ��������'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '������� ���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 215-06-26',
			'dog' : '11/04 �� 11 ������ 2012�.',
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
			'name' : '������������ ����',
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
					'name' : '������������� ���������',
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
			'dog' : '05/�� �� 21.07.2009 �.',
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
					'name' : '����� ������������ � ����������� ������',
					'comment' : '[b]������ 9 ���� - ����� ������������, 2 - ����������� ������,  ���� ���� ������, �� ��������� ����� ����[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : '��� � ��������'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : '�������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
					'name' : '������� ������������'
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
			'name' : '������ ����������',
			'image' : 'mob_beeline.gif',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
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
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '���',
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
					'name' : '������� ��� PIN � ���'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 200-80-65',
			'dog' : '37/3360 �� 11.12.2009 �.',
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
			'name' : '��� ������� (VivaCell)',
			'image' : '',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
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
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '�������-��',
			'image' : '',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '�����',
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
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '�������-������',
			'image' : '',
			'limit' : {
				'min' : '20',
				'max' : '14999'
			},
			'fields' : {
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� ��������',
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
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������� ���� �. �����',
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
					'name' : '������� ���',
					'enum' : '',
					'enum' : {
						'9761176' : '�� �30 "�������"',
						'9761215' : '�� �45 "������������"'
					}
				},
				'100' : {
					'id' : '100',
					'type' : 'masked',
					'name' : '����� �������� �����.',
					'mask' : '**********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� � ��� ������',
					'mask' : '**.****',
					'comment' : '[b]��������![/b] ����� � ��� �� ������� ������������ ������".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ��������� ������������ ����� ������, �� ���� ����� ����� �������� ������� ��������� ������� [/b].'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '��� � �������� �����������',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : '������� �����������',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������� �����������',
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
					'name' : '������� �����������',
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
			'name' : '��� ������ �� �������� �����',
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
					'name' : '������� ����',
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
			'dog' : '2/��1/04.06 �� 14.04.2006 �',
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
			'name' : '����������',
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
					'name' : '������� ����'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8(***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(86155) 3-20-30',
			'dog' : '9/06 �� 9.06.2012 �.',
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
					'name' : '����� R-��������',
					'mask' : 'R************',
					'comment' : '[b]��������![/b] ����� R-�������� "[b]12[/b]" ����. ��� ���������� �������� [b]��������� �������������� �������� � ������� 1,9852%. ������ �������� ��������� ������ �������� ��������. ��� ���������� ��������� ���������� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(495) 727-43-33',
			'dog' : '��-23 �� 14.05.09�.',
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
			'name' : '�������� �� ����� "��������"',
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
					'name' : '������� ����� ������������ �������� ��� ���������',
					'comment' : '[b]��������![/b] ����� �� "[b]12[/b]" �� "[b]14[/b]" ����.[b]������ �������� ������ ��  �������� ������������ ������� GS 8300 (m,n), DRS 8300, GS 8302, GS 8304, GS8305, GS 8306, HD 9303. ���������� � ������ ������� �� �������� ������ ���������. ������ �������� ���������� ��� ��������� ��������� ��-������[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 �� 01.11.2009 �',
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
			'name' : '���������',
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
					'name' : '������� �����',
					'comment' : '[b]��������![/b] ����� "[b]�� 11 �� 12[/b]" ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '������ � ������',
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
					'name' : '����� �����',
					'comment' : '������� ����� ����� (��� ������������ � ����� ��������) � ������.������� ��� ��� ��� ������� � ������. [b]��������![/b] ��� ���������� �������� ��������� �������������� �������� � ������� 2.5%. ������ �������� ��������� ������ �������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : 'support@money.yandex.ru',
			'dog' : '�.12121.01 �� 03.02.2009 �.',
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
			'name' : '������ ���������� � �������� �������� ���������.',
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
					'name' : '������� �����, �� ������� ����������� ������. ����� �������� �������� �������� ��� 8 � ������ �����.',
					'comment' : '[b]������� �����, �� ������� ����������� ������. ����� �������� �������� �������� ��� 8 � ������ �����.[/b]'
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
			'name' : '��� "������"',
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
					'name' : '������� ����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8(86155) 2-66-95',
			'dog' : '09/12 �� 09 ������� 2012 �.',
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
			'name' : '��� �������',
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
					'name' : '����� ��������',
					'mask' : '*********',
					'comment' : '[b]��������![/b] ����� �������� ��� 0'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '������ �������',
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
					'name' : '����� ��������',
					'mask' : '*********',
					'comment' : '[b]��������![/b] ����� �������� ��� 0'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : 'Utel �������',
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
					'name' : '����� ��������',
					'mask' : '*********',
					'comment' : '[b]��������![/b] ����� �������� ��� 0'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-383-363-33-59 ����� �����: 36418',
			'dog' : '2/07/3308 �� 17.07.2012 �.',
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
			'name' : '��.������������,15',
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
					'name' : '����� ��������',
					'comment' : '[b]����� �������� �� 1 �� 3 ����[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
			'inn_for_cheque' : '6163107907'
		},
		'927' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '��.���������,127/44�',
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
					'name' : '����� ��������',
					'comment' : '[b]����� �������� �� 1 �� 3 ����[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
			'inn_for_cheque' : '6163107907'
		},
		'928' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '��.����������,4�',
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
					'name' : '����� ��������',
					'comment' : '[b]����� �������� �� 1 �� 3 ����[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
					'name' : '����� ������',
					'comment' : '[b]����� ������ �� 2 �� 5 ����[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
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
			'dog' : '09/12 �� 08 ������ 2012�.',
			'inn_for_cheque' : '2312016641'
		},
		'930' : {
			'i_type' : '',
			'printer_ok_only' : '0',
			'name' : '���',
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
					'name' : '������� ������� ����',
					'mask' : '*********',
					'comment' : '[b]������� ���� 9 ����[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***)***-**-**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '(861) 260-33-88',
			'dog' : '10/12 �� 10.10.2012 �.',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����� ��������',
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
					'name' : '�������������',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����� �������',
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
					'name' : '�������������',
					'comment' : '������� ID ��� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����������',
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
					'name' : '�������������',
					'comment' : '������� ID ��� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '�����',
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
					'name' : '�������������',
					'comment' : '������� ID ��� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '�������',
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
					'name' : '�������������',
					'comment' : '������� ID ��� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '��������� ���� ���������',
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
					'name' : '�������������',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '�������',
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
					'name' : '�������������',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� Email. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����������',
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
					'name' : '�������������',
					'comment' : '������� �����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����� �����',
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
					'name' : '�������������',
					'comment' : '������� ��������������� �����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� ��� ���������. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����������',
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
					'name' : '�������������',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� E-mail. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '��� �����',
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
					'name' : '�������������',
					'comment' : '������� ����� �����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� ����� �����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
					'name' : '�������������',
					'comment' : '������� ����� �����. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����',
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
					'name' : '�������������',
					'comment' : '������� ��������� ID. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����������',
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
					'name' : '�������������',
					'comment' : '������� ���. ��������! ��������� ����� Xsolla. ��������� ������� ������ �� ������ �������� �� �������� ������� ����� 88002002729 (������ ����������). ����� ���� �������� �������������� ��������.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8-800-200-27-29',
			'dog' : '25-10 �� 01.09.2010',
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
			'name' : '����� "����" ���������',
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
					'name' : '����� �/�',
					'comment' : '������� ����� �������� �����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (342) 240-81-78',
			'dog' : '07/12 �� 7 ������� 2012 �.',
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
			'name' : 'VIVA ������',
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
					'name' : '����� ��������',
					'mask' : 'z************'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
					'name' : '����� �����',
					'mask' : '**** **** **** ****',
					'comment' : '[b]��������![/b] �������� ������ �� ����� MasterCard ������ [b]����������[/b] ������.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
					'name' : '����� �����',
					'mask' : '**** **** **** ****',
					'comment' : '[b]��������![/b] �������� ������ �� ����� VISA ������ [b]����������[/b] ������.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : 'Visa (������ ���)',
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
					'name' : '����� �����',
					'mask' : '**** **** **** ****',
					'comment' : '[b]��������![/b] �������� ������ �� ����� VISA ������ [b]����������[/b] ������.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : '������� � ��� �����������'
				},
				'103' : {
					'id' : '103',
					'type' : 'text',
					'name' : '����� �����������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������ �� ���������������',
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
					'name' : '����� ������������� �������� (�������� A000AA93).'
				},
				'101' : {
					'id' : '101',
					'maxlength' : '4',
					'minlength' : '2',
					'type' : 'integer',
					'name' : '����� � ������',
					'comment' : '[b]��������![/b] ������� ����������� ����� ������".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ��������� ������������ ����� ������, �� ���� ����� ����� �������� ������� ��������� ������� [/b].'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 270-24-76, (861) 944-13-44',
			'dog' : '06/02 �� 06 ������� 2013 �.',
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
			'name' : '����',
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
					'name' : '�������� �������',
					'enum' : '',
					'enum' : {
						'1' : '����������',
						'2' : '�������������',
						'3' : '����������������',
						'4' : '�.�. ������������',
						'5' : '���������',
						'6' : '��������',
						'7' : '�.������������',
						'8' : '����������',
						'9' : '�����������',
						'10' : '�. �������������',
						'11' : '����������',
						'12' : '�����������',
						'13' : '�������',
						'14' : '��������'
					}
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/��������: ([^<]*)/#]',
						'description' : '��������'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/����� � ������: ([^<]*)/#]',
						'description' : 'C���� � ������'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'inn_for_cheque' : '2308091759',
			'name_for_cheque' : '(861) 216-83-08',
			'dog' : '193��-�� �� 21.11.2011 �.',
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
			'name' : '����',
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
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ��������� ������������ ����� ������, �� ���� ����� ����� �������� ������� ��������� ������� [/b].'
				},
				'100' : {
					'id' : '100',
					'maxlength' : '20',
					'minlength' : '1',
					'type' : 'integer',
					'name' : '����� �����'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'CLIENT_INFO' : '',
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_owner' : {
						'rule' : '[#~ADDINFO/��������: ([^<]*)/#]',
						'description' : '��������'
					},
					'_sum' : {
						'rule' : '[#~ADDINFO/����� � ������: ([^<]*)/#]',
						'description' : 'C���� � ������'
					},
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'inn_for_cheque' : '2336018461',
			'name_for_cheque' : '+7 (86165) 3-26-35',
			'dog' : '12/12 �� 12.12.2012 �.',
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
			'name' : '��.������� �������,106',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.������� �������,142',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '���.���������,102/105',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.���������,75',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.���������������,240',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.������� ����,25',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.���������,284',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.�.��������,185',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '���.�������������,37',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.����������,38',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.����������,81�',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.����������,151',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.���������� 176',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.����������,204',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.����������,206',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.�������,25',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.����������������,144/146',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.����������������,166',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '���.���������������,54',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.�������,15',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '��.������,22/99',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
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
			'dog' : '08/11 �� 08.11.2012�.',
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
			'name' : '�������',
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
					'name' : '����� ��������� ��� �������� �����',
					'mask' : '**** **** **** ****',
					'comment' : '[b]��������![/b] ����� �� 5 �� 8 ����.'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '�������� �� ����������',
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
					'name' : '������� ����� ������������ �������� ��� ���������',
					'comment' : '[b]��������![/b] ����� "[b]12[/b]" ��� "[b]14[/b]" ����. [b]������ �������� �� ������������ GS-8300(M,N),8302,8304,8305,8306(B,S),DRS 8300,HD 9303,CAM-DRE(MPEG-4).���������� ��� ��������� ��������� ��-�������.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8-(812)-332-34-98',
			'dog' : '308 �� 01.11.2009 �',
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
			'name' : '��� "������������"',
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
					'name' : '����� ��������',
					'comment' : '[b]����� ��������[/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� ������',
					'mask' : '**'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'dog' : '18/12 �� 18.12.2012 �.',
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
			'name' : '��� "��-����������"',
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
					'name' : '����� �������� �����.'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8[/b].'
				},
				'103' : {
					'id' : '103',
					'type' : 'masked',
					'name' : '����� � ��� ������',
					'mask' : '**.****',
					'comment' : '[b]��������![/b] ����� � ��� �� ������� ������������ ������.'
				},
				'104' : {
					'id' : '104',
					'type' : 'integer',
					'minlength' : '1',
					'maxlength' : '5',
					'name' : '��������� ��������',
					'comment' : '[b]��������![/b] ������� ��������� ��������.'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : '��� � �������� �����������',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : '������� �����������',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '"����� �������"',
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
					'name' : '����� ��������',
					'mask' : '*****-**-**'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b] ����� �������� �������� ��� "[b]8[/b]".'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '(861) 200-05-00',
			'dog' : '09/13 �� 03.01.2013 �.',
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
					'name' : '����� �����',
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
			'dog' : '20/02 �� 20.02.2013 �.',
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
			'name' : '������� ��� �8 "�������"',
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
					'name' : '����� �������� �����.',
					'mask' : '**********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� � ��� ������',
					'mask' : '**.****',
					'comment' : '[b]��������![/b] ����� � ��� �� ������� ������������ ������".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '3',
					'maxlength' : '6',
					'name' : '��� �������'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '��� � �������� �����������',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : '������� �����������',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������� ��� �11 ��-�� ����������',
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
					'name' : '����� �������� �����.',
					'mask' : '**********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� � ��� ������',
					'mask' : '**.****',
					'comment' : '[b]��������![/b] ����� � ��� �� ������� ������������ ������".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '3',
					'maxlength' : '4',
					'name' : '��� �������'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '��� � �������� �����������',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : '������� �����������',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '��� ����� (���. ����)',
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
					'name' : '����� �������� �����.',
					'mask' : '********'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '����� � ��� ������',
					'mask' : '**.****',
					'comment' : '[b]��������![/b] ����� � ��� �� ������� ������������ ������".'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '��� � �������� �����������',
					'comment' : ''
				},
				'999' : {
					'id' : '999',
					'type' : 'text',
					'name' : '������� �����������',
					'comment' : ''
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '0',
				'receive_properties' : {
					'ADDINFO' : '���������� � ��������'
				},
				'show_properties' : {
					'_ADDINFO' : {
						'rule' : '[#~ADDINFO/^(.*)/#]',
						'description' : '���������� � ��������'
					}
				}
			},
			'name_for_cheque' : '8 (800) 100-100-8',
			'dog' : '2347/0001207 �� 30.11.2011�.',
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
			'name' : '������ ������',
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
					'name' : '����� �����',
					'mask' : '****-**|******/1'
				},
				'101' : {
					'id' : '101',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
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
			'dog' : '21/12 �� 21.12.2012 �.',
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
			'name' : '����������',
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
					'name' : '����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������![/b]'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : '���',
					'comment' : '[b]��������![/b]'
				},
				'102' : {
					'id' : '102',
					'type' : 'text',
					'name' : '��������',
					'comment' : '[b]��������![/b]'
				},
				'103' : {
					'id' : '103',
					'type' : 'text',
					'name' : '���',
					'comment' : '[b]��������![/b]'
				},
				'104' : {
					'id' : '104',
					'type' : 'text',
					'name' : '��� ��������',
					'comment' : '[b]��������![/b]'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '�������� ��',
					'comment' : '[b]��������![/b]'
				},
				'106' : {
					'id' : '106',
					'type' : 'text',
					'name' : '�������� ��',
					'comment' : '[b]��������![/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '88003333767',
			'dog' : '71-858-1-FLIRTPAY10-20100816 �� 19.10.2010 �.',
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
			'name' : '���� ��� �7 (������, ������������, ����� �� ������)',
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
					'name' : '������� �������'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 228-79-99',
			'dog' : '25/13 �� 25.06.2013 �.',
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
			'name' : '���� ��� �7 (������)',
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
					'name' : '������� �������'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8.[/b]'
				},
				'103' : {
					'id' : '103',
					'type' : 'integer',
					'minlength' : '3',
					'maxlength' : '4',
					'name' : '������� ��������� �������'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 228-79-99',
			'dog' : '25/13 �� 25.06.2013 �.',
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
			'name' : '����� ���������',
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
					'name' : '����� �����',
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
			'dog' : '27/13 �� 27.03.2013 �.',
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
			'name' : '������',
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
					'name' : '��� �������',
					'enum' : '',
					'enum' : {
						'22' : '������������',
						'3' : '������',
						'4' : '�����-������ �����'
					}
				},
				'100' : {
					'id' : '100',
					'type' : 'text',
					'name' : '������� �������'
				},
				'101' : {
					'id' : '101',
					'type' : 'text',
					'name' : '������� ���'
				},
				'103' : {
					'id' : '103',
					'type' : 'text',
					'name' : '������� ��������'
				},
				'104' : {
					'id' : '104',
					'type' : 'masked',
					'name' : '���� ��������',
					'mask' : '**.**.****',
					'comment' : '[b]�������� 24.11.1998[/b]'
				},
				'105' : {
					'id' : '105',
					'type' : 'text',
					'name' : '����� ����������'
				},
				'106' : {
					'id' : '106',
					'type' : 'enum',
					'name' : '�������',
					'enum' : '',
					'enum' : {
						'1' : '��',
						'0' : '���'
					}
				},
				'107' : {
					'id' : '107',
					'type' : 'enum',
					'name' : '�������� �������������� ��������',
					'enum' : '',
					'enum' : {
						'�������' : '�������',
						'������' : '������'
					}
				},
				'108' : {
					'id' : '108',
					'type' : 'text',
					'name' : '�����'
				},
				'109' : {
					'id' : '109',
					'type' : 'text',
					'name' : '�����'
				},
				'102' : {
					'id' : '102',
					'type' : 'masked',
					'name' : '���������� ����� ��������',
					'mask' : '8 (***) ***-**-**',
					'comment' : '[b]��������! ����� �������� ��� 8.[/b]'
				}
			},
			'processor' : {
				'type' : 'Cyberplat',
				'offline' : '1',
				'receive_properties' : '',
				'show_properties' : ''
			},
			'name_for_cheque' : '8 (861) 228-79-99',
			'dog' : '25/13 �� 25.06.2013 �.',
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
			'name' : '�������� ��� �������',
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
					'name' : '����������',
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
				'name' : '��������� �����',
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
					'name' : '��������',
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
					'name' : '������',
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
					'name' : '���',
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
				'name' : '�����������',
				'columns' : '1',
				'id' : '102',
				'image' : 'main_tv.png',
				'titleimage' : 'tel.gif',
				'204' : {
					'name' : '�������� ��',
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
					'name' : '����������',
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
				'name' : '������������ �����',
				'columns' : '2',
				'id' : '103',
				'image' : 'main_tel.png',
				'titleimage' : '',
				'206' : {
					'name' : '����������',
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
					'name' : '������������',
					'columns' : '2',
					'id' : '207',
					'image' : 'int_centertelekom.gif',
					'titleimage' : 'main_internet_utk.gif',
					'208' : {
						'name' : '�������������� ������',
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
						'name' : '������� ������',
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
				'name' : '��������� ��������',
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
				'name' : '�������� � IP ���������',
				'columns' : '1',
				'id' : '105',
				'image' : 'main_int.png',
				'titleimage' : 'int.gif',
				'210' : {
					'name' : '����������',
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
					'name' : '����� �������',
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
				'name' : '���',
				'columns' : '2',
				'id' : '106',
				'image' : 'main_zkh.png',
				'titleimage' : 'main_communal_ico.gif',
				'212' : {
					'name' : '�������������',
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
					'name' : '���',
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
					'name' : '���',
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
					'name' : '����� ������',
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
					'name' : '������',
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
					'name' : '�������������',
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
					'name' : '�������� ����',
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
				'name' : '���� � �����������',
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
				'name' : '����������� �������� � ��������',
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
				'name' : '���������, ������ � ������',
				'columns' : '2',
				'id' : '109',
				'image' : 'main_oth.png',
				'titleimage' : 'main_platej_ico.gif',
				'222' : {
					'name' : '������ �����',
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
					'name' : '���������',
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
					'name' : '������ �� ������� ���',
					'columns' : '4',
					'id' : '227',
					'image' : 'ohr_detsad.gif',
					'titleimage' : '',
					'225' : {
						'name' : '�. ���������',
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
						'name' : '������',
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
					'name' : '������',
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
/*  - - - - - ������ � true, ��� ������������� include ����� */
var $iface_config_js = 'true';
