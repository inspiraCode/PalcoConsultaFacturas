namespace BusinessSpecificLogic.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LocalCustomerCatalog : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.cat_Customer",
                c => new
                    {
                        CustomerKey = c.Int(nullable: false, identity: true),
                        Value = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.CustomerKey);
            
            AddColumn("dbo.CQAHeader", "FSCustomerKey", c => c.Int());
            AddColumn("dbo.CQAHeader", "ConcernDescription", c => c.String(unicode: false));
            CreateIndex("dbo.CQAHeader", "CustomerKey");
            AddForeignKey("dbo.CQAHeader", "CustomerKey", "dbo.cat_Customer", "CustomerKey");
            DropColumn("dbo.CQAHeader", "ConcertDescription");
        }
        
        public override void Down()
        {
            AddColumn("dbo.CQAHeader", "ConcertDescription", c => c.String(unicode: false));
            DropForeignKey("dbo.CQAHeader", "CustomerKey", "dbo.cat_Customer");
            DropIndex("dbo.CQAHeader", new[] { "CustomerKey" });
            DropColumn("dbo.CQAHeader", "ConcernDescription");
            DropColumn("dbo.CQAHeader", "FSCustomerKey");
            DropTable("dbo.cat_Customer");
        }
    }
}
