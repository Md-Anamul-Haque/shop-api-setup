# Tables querys for shop

## ORG_table
```sql
    create table ORG(
        org_code varchar(20),
        org_name varchar(150),
        org_type varchar(20),
        address varchar(200),
        phone varchar(17),
        email varchar(100),
        c_phone varchar(17),
        c_email varchar(100),
        note varchar(255),
        status varchar(1),
        ref_user_id varchar(20),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updateAt date,
        primary key(org_code)
    );
```


## users_table
```sql
    create table users(
        org_code varchar(20),
        user_id varchar(20),
        username varchar(50),
        role varchar(20),
        address varchar(200),
        phone varchar(17),
        email varchar(100),
        c_phone varchar(17),
        c_email varchar(100),
        note varchar(255),
        status varchar(1),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(user_id)
    );

```


## product_mt_table

```sql
    create table product_mt(
        org_code varchar(20),
        pd_id varchar(20),
        pd_name varchar(60),
        pd_category varchar(35),
        pd_type varchar(35),
        is_sl_control varchar(3),
        pd_model varchar(35),
        pd_brand varchar(40),
        pd_image varchar(255),
        feature varchar(100),
        color varchar(35),
        uom varchar(35),
        sale_margin_price float(12,2),
        pd_price float(12,4),
        pd_desc varchar(255),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(pd_id)
    );


```



## product_dt_table

```sql
    create table product_dt(
        org_code varchar(20),
        pddt_id varchar(20),
        pd_id varchar(20),
        pdsl_no varchar(60),
        pd_ei_no varchar(60),
        status varchar(20),
        pur_id varchar(20),
        pur_date date,
        sup_id varchar(20),
        sl_id varchar(20),
        sl_date date,
        cust_id varchar(20),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(pd_id)
    );

```



## suppliers_table

```sql
    create table suppliers(
        org_code varchar(20),
        sup_id varchar(20),
        sup_name varchar(50),
        sup_phone varchar(17),
        sup_category varchar(35),
        sup_address varchar(200),
        sup_image varchar(255),
        sup_email varchar(100),
        sup_desc varchar(255),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(sup_id)
    );

```



## customers_table

```sql
    create table customers(
        org_code varchar(20),
        cust_id varchar(20),
        cust_name varchar(50),
        cust_phone varchar(17),
        cust_address varchar(200),
        cust_image varchar(255),
        cust_email varchar(100),
        cust_Desc varchar(255),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(cust_id)
    );

```



## sells_mt_table

```sql
    create table sells_mt(
        org_code varchar(20),
        sl_id varchar(20),
        sl_date date,
        total_price float(12,4),
        emp_id varchar(20),
        cust_id varchar(20),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(sl_id)
    );

```



## sells_dt_table

```sql
    create table sells_dt(
        org_code varchar(20),
        sldt_id varchar(20),
        sl_id varchar(20),
        pd_id varchar(20),
        qty int,
        unit_price float(5,4),
        total_price float(10,4),
        discount varchar(255),
        tax float(5,4),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(sldt_id)
    );


```





## employee_table

```sql
    create table employee(
        org_code varchar(20),
        emp_id varchar(20),
        emp_name varchar(50),
        emp_phone varchar(17),
        emp_category varchar(35),
        job_Title varchar(30),
        salary float(5,2),
        emp_dob varchar(50),
        emp_address varchar(200),
        emp_image varchar(255),
        emp_email varchar(100),
        emp_desc varchar(255),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(emp_id)
    );

```





## purchase_mt_table

```sql
    create table purchase_mt(
        org_code varchar(20),
        pur_id varchar(20),
        pur_date date,
        total_price float(12,4),
        sup_id varchar(20),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(pur_id)
    );

```



## purchase_dt_table

```sql
    create table purchase_dt(
        org_code varchar(20),
        purdt_id varchar(20),
        pur_id varchar(20),
        pd_id varchar(20),
        qty int,
        unit_price float(5,4),
        total_price float(10,4),
        discount float(10,4),
        tax float(5,4),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(purdt_id)
    );

```



## brands_table

```sql
    create table brands(
        org_code varchar(20),
        bnd_id varchar(20),
        bnd_name varchar(20),
        note varchar(255),
        bnd_logo varchar(255),
        bnd_website varchar(255),
        bnd_type varchar(30),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(bnd_id)
    );

```

## category_table

```sql
    create table category(
        org_code varchar(20),
        cat_id varchar(20),
        cat_name varchar(20),
        note varchar(255),
        createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        createBy varchar(20),
        updateAt date,
        updateBy varchar(20),
        primary key(cat_id)
    );

```
