using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ratings.Migrations
{
    public partial class UpdatedTotalClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TotalRating",
                table: "Totals",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalRating",
                table: "Totals");
        }
    }
}
