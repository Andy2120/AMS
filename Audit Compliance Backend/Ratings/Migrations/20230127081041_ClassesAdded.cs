using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ratings.Migrations
{
    public partial class ClassesAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CheckoutCounters",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    QECC = table.Column<int>(type: "int", nullable: false),
                    CDC = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CheckoutCounters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ManningCustomerRelations",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GG = table.Column<int>(type: "int", nullable: false),
                    Manning = table.Column<int>(type: "int", nullable: false),
                    CSI = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ManningCustomerRelations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MerchandiseReadinesses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FMCG = table.Column<int>(type: "int", nullable: false),
                    GMD = table.Column<int>(type: "int", nullable: false),
                    DS = table.Column<int>(type: "int", nullable: false),
                    PT = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MerchandiseReadinesses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "storeCleanlinesses",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GPFE = table.Column<int>(type: "int", nullable: false),
                    SAB = table.Column<int>(type: "int", nullable: false),
                    RS = table.Column<int>(type: "int", nullable: false),
                    BOEA = table.Column<int>(type: "int", nullable: false),
                    FSCR = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_storeCleanlinesses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Totals",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CCId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MCRId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MRId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SCId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Totals", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Totals_CheckoutCounters_Id",
                        column: x => x.Id,
                        principalTable: "CheckoutCounters",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Totals_ManningCustomerRelations_Id",
                        column: x => x.Id,
                        principalTable: "ManningCustomerRelations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Totals_MerchandiseReadinesses_Id",
                        column: x => x.Id,
                        principalTable: "MerchandiseReadinesses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Totals_storeCleanlinesses_Id",
                        column: x => x.Id,
                        principalTable: "storeCleanlinesses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Totals");

            migrationBuilder.DropTable(
                name: "CheckoutCounters");

            migrationBuilder.DropTable(
                name: "ManningCustomerRelations");

            migrationBuilder.DropTable(
                name: "MerchandiseReadinesses");

            migrationBuilder.DropTable(
                name: "storeCleanlinesses");
        }
    }
}
