using Microsoft.EntityFrameworkCore.Migrations;

namespace modern_sunshine_backend.Migrations
{
    public partial class addedfields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Venue_URL",
                table: "Events",
                newName: "Zip");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Events",
                newName: "VenueUrl");

            migrationBuilder.RenameColumn(
                name: "Band_Url",
                table: "Events",
                newName: "Time");

            migrationBuilder.AddColumn<string>(
                name: "BandUrl",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "EventName",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "Events",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "Events",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BandUrl",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EventName",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Notes",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "State",
                table: "Events");

            migrationBuilder.RenameColumn(
                name: "Zip",
                table: "Events",
                newName: "Venue_URL");

            migrationBuilder.RenameColumn(
                name: "VenueUrl",
                table: "Events",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Time",
                table: "Events",
                newName: "Band_Url");
        }
    }
}
