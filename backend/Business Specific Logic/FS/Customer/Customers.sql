﻿SELECT DISTINCT _NoLock_FS_Customer.CustomerKey
	,_NoLock_FS_Customer.CustomerID
	,_NoLock_FS_Customer.CustomerName
FROM _NoLock_FS_Customer
INNER JOIN _NoLock_FS_COHeader ON _NoLock_FS_Customer.CustomerKey = _NoLock_FS_COHeader.CustomerKey
INNER JOIN _NoLock_FS_COLine ON _NoLock_FS_COHeader.COHeaderKey = _NoLock_FS_COLine.COHeaderKey