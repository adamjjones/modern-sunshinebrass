using Microsoft.EntityFrameworkCore.Migrations;

namespace modern_sunshine_backend.Migrations
{
    public partial class Event : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Band_Url",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Venue_URL",
                table: "Events",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Band_Url",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Venue_URL",
                table: "Events");
        }
    }
}
