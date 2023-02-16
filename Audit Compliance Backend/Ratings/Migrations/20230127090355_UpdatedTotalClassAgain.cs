using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ratings.Migrations
{
    public partial class UpdatedTotalClassAgain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Totals_CheckoutCounters_Id",
                table: "Totals");

            migrationBuilder.DropForeignKey(
                name: "FK_Totals_ManningCustomerRelations_Id",
                table: "Totals");

            migrationBuilder.DropForeignKey(
                name: "FK_Totals_MerchandiseReadinesses_Id",
                table: "Totals");

            migrationBuilder.DropForeignKey(
                name: "FK_Totals_storeCleanlinesses_Id",
                table: "Totals");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddForeignKey(
                name: "FK_Totals_CheckoutCounters_Id",
                table: "Totals",
                column: "Id",
                principalTable: "CheckoutCounters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Totals_ManningCustomerRelations_Id",
                table: "Totals",
                column: "Id",
                principalTable: "ManningCustomerRelations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Totals_MerchandiseReadinesses_Id",
                table: "Totals",
                column: "Id",
                principalTable: "MerchandiseReadinesses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Totals_storeCleanlinesses_Id",
                table: "Totals",
                column: "Id",
                principalTable: "storeCleanlinesses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
